'use client'

import { BlueButton } from '../../../../../../styled/BlueButton';
import { useMint } from '../../hooks/useMint';
import { useEffect } from 'react';
import Progress from '../../../../../../components/Progress/Progress';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';

const MintButton = () => {
	const { isLoading, mintGen } = useMint();
	const dispatch = useAppDispatch();

	const mint = async () => {
		try {
			const tx = await mintGen();
			dispatch(setIsActive(true))
			dispatch(setTxHash(tx.transactionHash))
		} catch(err: any) {
		    throw new Error(err);
		}
	}

	return (
		<BlueButton disabled={isLoading} onClick={mint}>
			<i>MINT GEN 0</i>
			{isLoading && <Progress/>}
		</BlueButton>
	);
};

export default MintButton;