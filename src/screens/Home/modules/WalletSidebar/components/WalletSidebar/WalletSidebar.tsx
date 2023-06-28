'use client'

import styles from './WalletSidebar.module.scss'
import { useAccount } from 'wagmi';
import User from '../User/User';
import Wallets from '../Wallets/Wallets';
import { useAppSelector } from '../../../../../../core/hooks/store.hook';

const WalletSidebar = () => {
	const { isConnected } = useAccount()
	const { height } = useAppSelector(state => state.NavbarSlice)
	const { isWalletActive } = useAppSelector(
		state => state.MenuSlice
	)

	return (
		<>
			{
				!isConnected && isWalletActive && (
					<div style={{ position: 'absolute', zIndex: '20', right: 0, top: height }} className={styles.walletSidebar}>
						<User />
						<Wallets />
					</div>
				)
			}
		</>
	);
};

export default WalletSidebar;