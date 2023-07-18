import { useState } from 'react';
import { CDN_URL, MINT_GEN_ZERO_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_zero.json'
import WhiteListService from '../../../../../core/services/WhiteList/WhiteList.service';
import { useAppDispatch } from '../../../../../core/hooks/store.hook';
import { setIsUserHaveWl } from '../../../../../core/store/slices/UserSlice';


export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useAppDispatch()
	const { address } = useAccount();


	const mintGen = async () => {
		try {
			setIsLoading(true);

			const freeList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'free' });
			const discountList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'discount' });

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_ZERO_ADDRESS,
				address ? address : '',
				0,
				freeList.data.addresses,
				discountList.data.addresses,
				abi
			);

			const isUserInFreeList = await cryptoflatsNFT.isUserFreePurchaseWhitelist();
			const isUserInDiscountList = await cryptoflatsNFT.isUserEarlyAccessWhiteList();

			if (!isUserInFreeList && !isUserInDiscountList) {
				dispatch(setIsUserHaveWl(false))
				throw new Error('You can`t mint our NFT because of you`re not whitelisted!')
			}

			return await cryptoflatsNFT.mintGen();
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