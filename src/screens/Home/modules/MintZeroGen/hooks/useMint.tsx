import { useState } from 'react';
import { CDN_URL, MINT_GEN_ZERO_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_zero.json'
import WhiteListService from '../../../../Admin/modules/AddWhiteList/services/WhiteList.service';


export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const { address } = useAccount();


	const mintGen = async () => {
		try {
			setIsLoading(true);

			const freeList = await WhiteListService.getGenZeroFree();
			const discountList = await WhiteListService.getGenZeroDiscount();
			console.log(freeList)
			console.log(discountList)

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_ZERO_ADDRESS,
				address ? address : '',
				0,
				freeList,
				discountList,
				abi
			);



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