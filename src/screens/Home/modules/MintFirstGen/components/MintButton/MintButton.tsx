'use client'

import { BlueMint, MintDiv } from '../../../../../../styled/BlueButton';
import { useMint } from '../../hooks/useMint';
import { useAppDispatch, useAppSelector } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';
import Progress from '../../../../../../components/Progress/Progress';
import { useAccount, useConnect } from 'wagmi';
import { setWalletActive } from '../../../../../../core/store/slices/MenuSlice';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Dialog from '../../../../../../components/Dialog/Dialog';
import { setIsUserHaveWl } from '../../../../../../core/store/slices/UserSlice';



const MintButton = () => {
	const dispatch = useAppDispatch();
	const { isLoading, mintGen } = useMint();
	const { isUserHaveWl } = useAppSelector(state => state.UserSlice)
	const { isConnected } = useAccount();
	const t = useTranslations('Home')

	const mint = async () => {
		try {
			if (!isConnected) return dispatch(setWalletActive(true))
			const tx = await mintGen();
			// dispatch(setIsActive(true))
			// dispatch(setTxHash(tx.transactionHash))
		} catch(err: any) {
			throw new Error(err);
		}
	}

	return (
		<>
			<MintDiv>
				<BlueMint disabled={isLoading} onClick={mint} >
					<i>MINT GEN#1</i>
					{isLoading && <Progress/>}
				</BlueMint>
			</MintDiv>

			<Dialog onClose={() => dispatch(setIsUserHaveWl(true))} open={!isUserHaveWl}>
				{
					t.rich('mint.alertWl', {
						span: (chunks) => <span>{chunks}</span>
					})
				}
			</Dialog>
		</>
	);
};

export default MintButton;