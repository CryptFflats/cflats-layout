import { useState } from 'react';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_first.json'
import WhiteListService from '../../../../../core/services/WhiteListService/WhiteList.service';
import { useAppDispatch } from '../../../../../core/hooks/store.hook';
import { setIsUserHaveWl } from '../../../../../core/store/slices/UserSlice';
import { getNftContract, getWlBoxByGen } from 'core/utils/contract/utils/contracts';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import { setErrorMessage, setIsMintErrorActive } from 'core/store/slices/MintError';
import { setIsWlBoxActive } from 'core/store/slices/WlBoxSlices';
import { setWlBoxModal } from 'core/store/slices/ModalSlice';
import BigNumber from 'bignumber.js';
import { keccak256 } from 'ethers';
import { MerkleTree } from 'merkletreejs';

export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useAppDispatch()

	const mintGen = async () => {
		try {
			setIsLoading(true);

			const signer = await CflatsSigner.getSigner();
			const contractGen = await getNftContract(1, signer);
			const contractWlBox = await getWlBoxByGen(1, signer);

			const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();
			const discountPrice = await contractGen.EARLY_ACCESS_PRICE();

			if (await contractWlBox.balanceOf(signer.address) > 0n) {
				dispatch(setWlBoxModal(true));
				return;
			}

			// const freeList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'free' });
			// const discountList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'discount' });

			// const merkleTreeDataFree = getMerkleTreeData(freeList.data.addresses, signer.address);
			// const merkleTreeDataDiscount = getMerkleTreeData(discountList.data.addresses, signer.address);
			const merkleTreeDataDiscount = getMerkleTreeData([], signer.address);
			const merkleTreeDataFree = getMerkleTreeData(["0x1d6B3E373B947319a4B76A851bb17C1dEcCADb1D",
				"0xD2e5c462e30D7b34ce619388fDf61b0963680A78",
				"0xe32da2f3A8A9DF41CdFF20CdBcb7B8445F9aF3C7",
				"0xDc3d3fA1aEbd13fF247E5F5D84A08A495b3215FB",
				"0x33c8b23ecce4c85d11f1dc05db0aaf45743a785f",
				"0x725fDa64d06bfD64E53C55FD1Fd0Cd6A05F04957",
				"0x10E748c556Ed76aa2f8602A7e45CA0464b45B585",
				"0xd96E0C730E2D50Db2Ca18dC887fB5b66Cb0BCf74",
				"0xd96E0C730E2D50Db2Ca18dC887fB5b66Cb0BCf74",
				"0x10E748c556Ed76aa2f8602A7e45CA0464b45B585",
				"0x6cf88d450D494f3b10bEBAa6F338c91EC03fb494",
				"0xAb5c40f6923A13930Ec2C1eB3Cdf8E158fDa6750",
				"0xc686321B6eF3F0262C1a4F62fCCbDaF8fF43dCe9",
				"0x4940655C4a1f379FF78af413deBE961Dc21e74f2",
				"0x7dbE6E70d8Af8e423D275bd12f64dE7FFDb82B2E",
				"0x8F119ad8916ACEf965D6C41Fa2414a5db36535A4",
				"0x06DF48b0D68c08468593c3a761679504cb8833c4",
				"0xe80FB7Ac505d5C4138070a98C6aaD24870eEf1dd",
				"0xE20ff48a731a83054F58CcB5D18482A0F23a8fa4",
				"0x9cD61186115468DA3E9495b2Df4C7b2a56F2eD68",
				"0xB6C4Ea9c0Ee9704682c5491d691Ee455d971F8be",
				"0xA86f5324129c34312187CdE5B42Fe283FC493fD8",
				"0x6d779596f095463362a825a67145d0c5245a89f2",
				"0xB1B69A9ad24c3eDD856308E21056f587542bC292",
				"0xC469b48B1555F34426eA980d6cee472C4121961C",
				"0x58C8409Fa7811Ccc21cb8549DD3de1b4A75e4C03",
				"0x9762b8a35ddD321103ce3E762C0147756afFacCF",
				"0xCa71a49c3CFef733094F77506BD8FB2b1f86F46b",
				"0x917D8423B67F743306ACa3E23ED455Ca2a70fE17",
				"0xE152a7711e061F07a828c98E68ca5bac44d91515",
				"0x69aF21Cd11DBEE631e5Ae9014E093409945eE424",
				"0x36531112b8B46D65805Dce1582d096704736DCd3",
				"0xd025307ca5B98498F5F1594862af443027fa63B7",
				"0x4C93191f1CD837448603Bd9bC28d9b4Aa44660E8",
				"0x495AFed96dd61074018799A0002c6983780C2814",
				"0x54586A95f179C4cC0F93f5D60b6230BeD6d7C3b9",
				"0x62724047bb0aC8A87c905d86597a774996d7A0D8",
				"0x8EF11DE0e650718Fd6465266a7136988c4d01496",
				"0xde0Fa6299B4CdD054ce4d0C263305E37fB32f749",
				"0x6A7a3958B901C19549554c5E766eF9A709C0cebD",
				"0x00550f950f7e265f172b98c3c6622Fe8988110f6",
				"0x4158Ac694B5889080Aeca782f7231BB1b84cAC2E"], signer.address);

			// check if public sale is activated
			if (await contractGen.isPublicSaleActive() === false) {
				const errorMsg = `Public sale has not been activated yet!`;
				
				// dispatch(setIsMintErrorActive(true))
				// dispatch(setErrorMessage(errorMsg));
				//
				// throw new Error(errorMsg);


				return await contractGen.mint(["0x973d598d801266c990ee2453b2cdb70233c06fcebb1cdc27a70a7ef5b201e2a8"], ["0xcb9d6ea235fe6179922e9fe01074ab96ce7e0233ba605904c1b63552f133391a"], 5000, {
					value: 0,
				});

				console.log(await contractGen.isUserFreePurchaseWhitelist(merkleTreeDataFree.merkleProof, signer.address, 5000))
				if (await contractGen.isUserFreePurchaseWhitelist(merkleTreeDataFree.merkleProof, signer.address, 5000) === true) {
					return await contractGen.mint({
						value: 0
					});
				}

				if (await contractGen.isUserEarlyAccessWhitelist(merkleTreeDataDiscount.merkleProof, signer.address) === true) {
					const signerBalanceInEth = await CflatsSigner.getBalance();

					// check user balance
					if(signerBalanceInEth < discountPrice) {
						const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
						const errorMsg = `Balance should be at least 0.015 ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(5)} ETH`;

						dispatch(setIsMintErrorActive(true))
						dispatch(setErrorMessage(errorMsg));

						throw new Error(errorMsg);
					}

					return await contractGen.mint({
						value: discountPrice
					});
				}
			}

			// const signerBalanceInEth = await CflatsSigner.getBalance();
			//
			// // check user balance
			// if(signerBalanceInEth < publicSalePrice) {
			// 	const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
			// 	const errorMsg = `Balance should be at least 0.015 ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(5)} ETH`;
			//
			// 	dispatch(setIsMintErrorActive(true))
			// 	dispatch(setErrorMessage(errorMsg));
			//
			// 	throw new Error(errorMsg);
			// }

			// console.log(publicSalePrice)
			// return await contractGen.mint({
			// 	value: publicSalePrice
			// });
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

function getMerkleTreeData(addresses: string[], userAddress: string) {
	try {
		const leaves: string[] = addresses.map(account => keccak256(account));
		const merkleTree: MerkleTree = new MerkleTree(leaves, keccak256, {
			sort: true
		});
		const leaf = keccak256(userAddress);
		const merkleRoot = merkleTree.getHexRoot();
		const merkleProof = merkleTree.getHexProof(leaf);

		return {
			merkleRoot,
			merkleProof,
			leaf
		};
	} catch (err: any) {
		throw new Error(err);
	}
}