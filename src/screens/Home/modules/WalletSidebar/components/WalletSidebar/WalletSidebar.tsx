import styles from './WalletSidebar.module.scss'
import { useAccount, useConnect } from 'wagmi';
import User from '../User/User';
import Wallets from '../Wallets/Wallets';
import { useAppSelector } from '../../../../../../core/hooks/store.hook';

const WalletSidebar = () => {
	const { isConnected } = useAccount()
	const { isWalletActive, isProfileActive } = useAppSelector(
		state => state.MenuSlice
	)

	return (
		<>
			{
				!isConnected && isWalletActive && (
					<div className={styles.walletSidebar}>
						<User />
						<Wallets />
					</div>
				)
			}
		</>
	);
};

export default WalletSidebar;