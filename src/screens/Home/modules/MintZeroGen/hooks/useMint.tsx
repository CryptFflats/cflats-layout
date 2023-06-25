import { useState } from 'react';
import { CDN_URL, MINT_GEN_ZERO_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_zero.json'


export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const { address } = useAccount();

	const mintGen = async () => {
		try {
			setIsLoading(true);

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_ZERO_ADDRESS,
				address ? address : '',
				0,
				[],
				[],
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