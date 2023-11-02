'use client'

import styles from './WalletSidebar.module.scss'
import { useAccount } from 'wagmi';
import User from '../User/User';
import Wallets from '../Wallets/Wallets';
import { useAppDispatch, useAppSelector } from '../../../../../../core/hooks/store.hook';
import { ClickAwayListener } from '@mui/material';
import { setWalletActive } from 'core/store/slices/MenuSlice';

const WalletSidebar = () => {
	const dispatch = useAppDispatch();
	const { isConnected } = useAccount()
	const { height } = useAppSelector(state => state.NavbarSlice)
	const { isWalletActive } = useAppSelector(
		state => state.MenuSlice
	)

	return (
		<>
			{
				!isConnected && isWalletActive && (
					<ClickAwayListener
						touchEvent={false}
						onClickAway={() => dispatch(setWalletActive(false))}
					>
						<div style={{ position: 'absolute', zIndex: '20', right: 0, top: height }} className={styles.walletSidebar}>
							<User />
							<Wallets />
						</div>
					</ClickAwayListener>
				)
			}
		</>
	);
};

export default WalletSidebar;