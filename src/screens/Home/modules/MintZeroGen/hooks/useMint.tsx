import { useState } from 'react';
import { CDN_URL, MINT_GEN_ZERO_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import CflatsGenZeroAbi from '../../../../../core/abi/gen_zero.json'
import WhiteListService from '../../../../../core/services/WhiteListService/WhiteList.service';
import { useAppDispatch, useAppSelector } from '../../../../../core/hooks/store.hook';
import { setIsUserHaveWl, } from '../../../../../core/store/slices/UserSlice';
import { Contract } from 'ethers';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import { EvmChain } from '@moralisweb3/evm-utils';
import Dialog from '../../../../../components/Dialog/Dialog';
import {BigNumber} from "bignumber.js";

import { setIsMintErrorActive, setErrorMessage } from '../../../../../core/store/slices/MintError';
import { getNftContract } from 'core/utils/contract/utils/contracts';


export const useMint = () => {
	const { isMintErrorActive, errorMessage } = useAppSelector(state => state.MintError);


	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useAppDispatch()


	const mintGen = async () => {

		if(await CflatsSigner.isConnected() === false) {
			console.log("not connected");
		}


		try {
			setIsLoading(true);

			const signer = await CflatsSigner.getSigner();
			const contractGen0 = await getNftContract(0, signer);

			// check if public sale is activated
			if(await contractGen0.isPublicSaleActive() === false) {
				const errorMsg = `Public sale has not been activated yet!`;
				
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(errorMsg));
				
				throw new Error(errorMsg);
			}


			const publicSalePrice = await contractGen0.PUBLIC_SALE_PRICE();
			const signerBalanceInEth = await CflatsSigner.getBalance();



			// check user balance
			if(signerBalanceInEth < publicSalePrice) {
				const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
				const errorMsg = `Balance should be at least 0.015 ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(5)} ETH`;
				
				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(errorMsg));
				
				throw new Error(errorMsg);
			}

			return await contractGen0.mint({
				value: publicSalePrice
			});

			// const freeList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'free' });
			// const discountList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'discount' });

			// const cryptoflatsNFT = new CryptoflatsNFT(
			// 	MINT_GEN_ZERO_ADDRESS,
			// 	address ? address : '',
			// 	0,
			// 	freeList.data.addresses,
			// 	discountList.data.addresses,
			// 	abi
			// );

			// const isUserInFreeList = await cryptoflatsNFT.isUserFreePurchaseWhitelist();
			// const isUserInDiscountList = await cryptoflatsNFT.isUserEarlyAccessWhiteList();

			// if (!isUserInFreeList && !isUserInDiscountList) {
			// 	dispatch(setIsUserHaveWl(false))
			// 	throw new Error('You can`t mint our NFT because of you`re not whitelisted!')
			// }

			// return await cryptoflatsNFT.mintGen();
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