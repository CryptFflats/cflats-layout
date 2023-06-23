import { useState } from 'react';
import { MINT_GEN_ZERO_ADDRESS } from '../../../../../core/utils/constance';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import * as process from 'process';
import { useAccount } from 'wagmi';

export const useMint = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const { address } = useAccount();

	const mintGen = async () => {
		try {
			setIsLoading(true);
			const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
			const abi = await fetch(`${API_KEY}/api/static/abi/genZeroAbi.json`);
			const jsonAbi = await abi.json();

			const cryptoflatsNFT = new CryptoflatsNFT(
				//MINT_GEN_ZERO_ADDRESS,
				'0xF6054114358eFCFDd76d0B279B801E24C707dd46',
				address ? address : '',
				0,
				[],
				[],
				jsonAbi
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
		isSuccess,
		mintGen
	}
};