'use client'

import { useMint } from '../../hooks/useMint';
import Progress from '../../../../../../components/Progress/Progress';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';
import { BlueMint, MintDiv } from '../../../../../../styled/BlueButton';
import { setWalletActive } from '../../../../../../core/store/slices/MenuSlice';
import { useAccount } from 'wagmi';


const MintButton = () => {
	const { isLoading, mintGen } = useMint();
	const dispatch = useAppDispatch();
	const {isConnected} = useAccount()

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
			<BlueMint disabled={isLoading} onClick={mint}>
				<i>MINT NFT PASS</i>
				{isLoading && <Progress/>}
			</BlueMint>
		</MintDiv>
	);
};

export default MintButton;