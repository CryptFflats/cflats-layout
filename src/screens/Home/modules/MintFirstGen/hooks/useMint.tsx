import { useState } from 'react';
import { keccak256 } from 'ethers';
import { MerkleTree } from 'merkletreejs';

import { getNftContract, getWlBoxByGen } from 'core/utils/contract/utils/contracts';
import { setErrorMessage, setIsMintErrorActive } from 'core/store/slices/MintError';
import { setWlBoxModal } from 'core/store/slices/ModalSlice';
import { useAppDispatch } from 'core/hooks/store.hook';
import { useMintForGenOneIfSignerInWl } from './useMintForGenOneIfSignerInWl';
import { DISCOUT_WL_ADDRESSES, FREE_WL_ADDRESSES, getMerkleTreeData } from 'core/utils/utils/helpers';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';

export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const mintGen = async () => {
		try {
			setIsLoading(true);

			const signer = await CflatsSigner.getSigner();
			const contractGen = await getNftContract(1, signer);
			const contractWlBox = await getWlBoxByGen(1, signer);
			const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();
			const signerBalanceInEth = await CflatsSigner.getBalance();
			const signerBalanceInWlBox = await contractWlBox.balanceOf(signer.address);

			// Выводим ошибку о нулевом балансе
			if(signerBalanceInEth === 0n) {
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage("Oh sorry! Your current balance is 0. Change your account or transfer ETH to current account"));
			}

			if (signerBalanceInWlBox > 0n) {
				dispatch(setWlBoxModal(true));
				return;
			}

			// const freeList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'free' });
			// const discountList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'discount' });

			// const merkleTreeDataFree = getMerkleTreeData(freeList.data.addresses, signer.address);
			// const merkleTreeDataDiscount = getMerkleTreeData(discountList.data.addresses, signer.address);
			const NOT_WL_BOX_ID = 555_555_555n;
			const merkleTreeDataFree = getMerkleTreeData(FREE_WL_ADDRESSES, signer.address);
			const merkleTreeDataDiscount = getMerkleTreeData(DISCOUT_WL_ADDRESSES, signer.address);



			// check if public sale is activated
			if (await contractGen.isPublicSaleActive() === false) {
				await useMintForGenOneIfSignerInWl(
					contractGen,
					merkleTreeDataFree.merkleProof,
					merkleTreeDataDiscount.merkleProof,
					NOT_WL_BOX_ID,
					dispatch,
				);
			} else {
				const isUserFreePurchaseWhitelistWithoutWlBox = await contractGen.isUserFreePurchaseWhitelist(merkleTreeDataFree.merkleProof, signer.address, NOT_WL_BOX_ID);
				const isUserEarlyAccessWhitelist = await contractGen.isUserEarlyAccessWhitelist(merkleTreeDataDiscount.merkleProof, signer.address);
				
				if(isUserFreePurchaseWhitelistWithoutWlBox || isUserEarlyAccessWhitelist) {
					return await useMintForGenOneIfSignerInWl(
						contractGen,
						merkleTreeDataFree.merkleProof,
						merkleTreeDataDiscount.merkleProof,
						NOT_WL_BOX_ID,
						dispatch
					);
				}
				
				const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();
				return await contractGen.mint(
					merkleTreeDataFree.merkleProof,
					merkleTreeDataDiscount.merkleProof,
					NOT_WL_BOX_ID,
					{
						value: publicSalePrice
					});
			}
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