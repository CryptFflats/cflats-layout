"use client"

import styles from './WalletButton.module.scss'
import { RiWallet3Line } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { setMenuActive, setWalletActive } from 'core/store/slices/MenuSlice';
import { useAccount } from 'wagmi';
import { enableBodyScroll } from 'body-scroll-lock';

const WalletButton = () => {
	const { isWalletActive, isMenuActive } = useAppSelector(
		state => state.MenuSlice
	)
	const dispatch = useAppDispatch()
	const { isConnected } = useAccount()

	const openMenu = (): void => {
		dispatch(setWalletActive(!isWalletActive))
		if (isMenuActive) {
			dispatch(setMenuActive(false))
			enableBodyScroll(document.body)
		}
	}

	return (
		<>
			{
				!isConnected && (
					<button onClick={openMenu} title={'Connect Wallet'} className={styles.walletButton}>
						<RiWallet3Line size={45} />
					</button>
				)
			}
		</>
	);
};

export default WalletButton;