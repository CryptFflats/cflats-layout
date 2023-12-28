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

			const freeList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'free' });
			const discountList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'discount' });

			const merkleTreeDataFree = getMerkleTreeData(freeList.data.addresses, signer.address);
			const merkleTreeDataDiscount = getMerkleTreeData(discountList.data.addresses, signer.address);


			// check if public sale is activated
			if (await contractGen.isPublicSaleActive() === false) {
				const errorMsg = `Public sale has not been activated yet!`;
				
				// dispatch(setIsMintErrorActive(true))
				// dispatch(setErrorMessage(errorMsg));
				//
				// throw new Error(errorMsg);

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