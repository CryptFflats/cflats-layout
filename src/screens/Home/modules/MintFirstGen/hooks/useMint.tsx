import { useState } from 'react';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_first.json'
import WhiteListService from '../../../../../core/services/WhiteListService/WhiteList.service';
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

			const freeList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'free' });
			const discountList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'discount' });

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_FIRST_ADDRESS,
				address ? address : '',
				1,
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