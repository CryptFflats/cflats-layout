import { useState } from 'react';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_first.json'
import WhiteListService from '../../../../../core/services/WhiteListService/WhiteList.service';
import { useAppDispatch } from '../../../../../core/hooks/store.hook';
import { setIsUserHaveWl } from '../../../../../core/store/slices/UserSlice';
import { getNftContract } from 'core/utils/contract/utils/contracts';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import { setErrorMessage, setIsMintErrorActive } from 'core/store/slices/MintError';
import BigNumber from 'bignumber.js';


export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useAppDispatch()

	const mintGen = async () => {
		try {
			setIsLoading(true);

			const signer = await CflatsSigner.getSigner();
			const contractGen = await getNftContract(1, signer);

			// check if public sale is activated
			if(await contractGen.isPublicSaleActive() === false) {
				const errorMsg = `Public sale has not been activated yet!`;
				
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(errorMsg));
				
				throw new Error(errorMsg);
			}


			const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();
			const signerBalanceInEth = await CflatsSigner.getBalance();



			// check user balance
			if(signerBalanceInEth < publicSalePrice) {
				const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
				const errorMsg = `Balance should be at least 0.015 ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(5)} ETH`;
				
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(errorMsg));
				
				throw new Error(errorMsg);
			}

			return await contractGen.mint({
				value: publicSalePrice
			});
		} catch (err: any) {
			setIsError(true);
			throw new Error(err);
		} finally {
			setIsLoading(false);
		}
	}

	return {
		isLoading,
		isError,
		mintGen
	}
};