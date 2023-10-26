"use client"

import { useState } from 'react';
import styles from 	'./WlPlace.module.scss';
import  IcClose from '../../../../assets/images/icons/ic_close_white.svg'
import { CloseButton } from './styles';
import { GrayButton } from '../../../../styled/GrayButton';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { setWhileList } from '../../../../core/store/slices/MintSlice';

const WlPlace = () => {
	const dispatch = useAppDispatch();
	const { wlPlace } = useAppSelector(state => state.MintSlice);

	return (
		<>
			{
				wlPlace && (
					<div className={styles.wlPlace}>
						<div className={styles.bg}></div>

						<CloseButton onClick={() => dispatch(setWhileList(false))}>
							<IcClose />
						</CloseButton>

						<div className={styles.content}>
							<div className={styles.box}>
								<p>
									Use the opportunity of early free access and discount prices to get NFTs of a perspective p2e project in ethereum network.
								</p>
								<GrayButton 
									href={'https://zealy.io/c/cryptoflatscommunity'}
									//@ts-ignore
									target={'_blank'}
								>
									GET WHITELIST
								</GrayButton>
							</div>
							<div className={styles.box}>
								<p>
									You can buy whitelist early access and get other benefits of our project. There is no need of task completing.
								</p>
								<GrayButton 
									href={'https://opensea.io/cryptoflatsnft'}
									//@ts-ignore
									target={'_blank'}
								>
									BUY WHITELIST
								</GrayButton>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
};

export default WlPlace;