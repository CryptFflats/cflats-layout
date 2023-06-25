import { useState } from 'react';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import abi from '../../../../../core/abi/gen_first.json'


export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const { address } = useAccount();

	const mintGen = async () => {
		try {
			setIsLoading(true);

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_FIRST_ADDRESS,
				address ? address : '',
				1,
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