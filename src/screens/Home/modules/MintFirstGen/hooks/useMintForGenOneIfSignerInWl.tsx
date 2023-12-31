import BigNumber from "bignumber.js";
import { AppDispatch } from "core/store";
import { setErrorMessage, setIsMintErrorActive } from "core/store/slices/MintError";
import CflatsSigner from "core/utils/contract/utils/CflatsSigner";
import { Contract } from "ethers";

export async function useMintForGenOneIfSignerInWl(contractGen: Contract, freeWlProof: string[], discountWlProof: string[], wlBoxId: bigint, dispatch: AppDispatch) {
	const signer = await CflatsSigner.getSigner();
	const signerBalance = CflatsSigner.getBalance();
	const earlyAccessPrice = contractGen.EARLY_ACCESS_PRICE();
	const isUserFreePurchaseWhitelistWithoutWlBox = contractGen.isUserFreePurchaseWhitelist(freeWlProof, signer.address, wlBoxId);
	const isUserEarlyAccessWhitelist = contractGen.isUserEarlyAccessWhitelist(discountWlProof, signer.address);
	
	const [statusFreeAccess, statusEarlyAccess, discountPrice, signerBalanceInEth] = await Promise.all([
		isUserFreePurchaseWhitelistWithoutWlBox,
		isUserEarlyAccessWhitelist,
		earlyAccessPrice,
		signerBalance,
	]);
	
	try {
		if (statusFreeAccess === true) {
			return await contractGen.mint(
				freeWlProof,
				discountWlProof,
				wlBoxId
            );
		} else if (statusEarlyAccess === true) {
			if(signerBalanceInEth < discountPrice) {
				const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(`Balance should be at least 0.02 ETH to buy GEN#1. Current balance ${formatedBalance.toFormat(5)} ETH`));
				throw new Error(`Balance should be at least 0.02 ETH to buy GEN#1. Current balance ${formatedBalance.toFormat(5)} ETH`);
			}

			return await contractGen.mint(
				freeWlProof,
				discountWlProof,
				wlBoxId,
				{
					value: discountPrice,
				});
		}
	} catch (e) {
		throw new Error(`${e}`);
	}
}