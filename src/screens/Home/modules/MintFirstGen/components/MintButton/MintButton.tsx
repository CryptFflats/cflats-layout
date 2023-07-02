'use client'

import { BlueMint, MintDiv } from '../../../../../../styled/BlueButton';
import { useMint } from '../../hooks/useMint';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';
import Progress from '../../../../../../components/Progress/Progress';
import { useAccount, useConnect } from 'wagmi';
import { setWalletActive } from '../../../../../../core/store/slices/MenuSlice';


const MintButton = () => {
	const dispatch = useAppDispatch();
	const { isLoading, mintGen } = useMint();
	const { isConnected } = useAccount()

	const mint = async () => {
		try {
			if (!isConnected) return dispatch(setWalletActive(true))
			const tx = await mintGen();
			dispatch(setIsActive(true))
			dispatch(setTxHash(tx.transactionHash))
		} catch(err: any) {
			throw new Error(err);
		}
	}

	return (
		<MintDiv>
			<BlueMint disabled={isLoading} onClick={mint} >
				<i>MINT GEN 1</i>
				{isLoading && <Progress/>}
			</BlueMint>
		</MintDiv>
	);
};

export default MintButton;