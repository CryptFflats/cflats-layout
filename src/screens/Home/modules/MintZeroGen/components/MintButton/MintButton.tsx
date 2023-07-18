'use client'

import { useMint } from '../../hooks/useMint';
import Progress from '../../../../../../components/Progress/Progress';
import { useAppDispatch, useAppSelector } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';
import { BlueMint, MintDiv } from '../../../../../../styled/BlueButton';
import { setWalletActive } from '../../../../../../core/store/slices/MenuSlice';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { setIsUserHaveWl } from '../../../../../../core/store/slices/UserSlice';
import Dialog from '../../../../../../components/Dialog/Dialog';


const MintButton = () => {
	const { isLoading, mintGen } = useMint();
	const [isOpen, setIsOpen] = useState()
	const dispatch = useAppDispatch();
	const { isUserHaveWl } = useAppSelector(state => state.UserSlice)
	const {isConnected} = useAccount()
	const t = useTranslations('Home')



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
		<>
			<MintDiv>
				<BlueMint disabled={isLoading} onClick={mint}>
					<i>MINT NFT PASS</i>
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