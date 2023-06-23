import styles from './Wallets.module.scss'
import { useTranslations } from 'next-intl';
import { useConnect } from 'wagmi';
import IcMetaMask from '../../../../../../assets/images/icons/metamask-icon.svg'
import IcCoinBase  from '../../../../../../assets/images/icons/coinbase-icon.svg'
import IcWalletConnect  from '../../../../../../assets/images/icons/wallet_connect-icon-b79e8b13.svg'
import IcLedgerWallet  from '../../../../../../assets/images/icons/ledger-icon.svg'
import ConnectButton from '../ConnectButton/ConnectButton';



const Wallets = () => {
	const t = useTranslations('Info')
	const { connect, connectors, isLoading, pendingConnector } = useConnect()

	const walletsData = [
		{
			icon: <IcMetaMask />,
			connector: connectors[0],
			loading: isLoading && connectors[0].id === pendingConnector?.id,
			name: "MetaMask"
		},
		{
			icon: <IcCoinBase />,
			connector: connectors[1],
			loading: isLoading && connectors[1].id === pendingConnector?.id,
			name: "Coinbase Wallet"
		},
		{
			icon: <IcWalletConnect />,
			connector: connectors[2],
			loading: isLoading && connectors[2].id === pendingConnector?.id,
			name: "Wallet Connect"
		},
		{
			icon: <IcLedgerWallet />,
			connector: connectors[3],
			loading: isLoading && connectors[3].id === pendingConnector?.id,
			name: "Ledger Wallet"
		}
	]

//walletSidebar.about
	return (
		<div className={styles.wallets}>
			<p className={styles.text}>
				{t.rich('walletSidebar.about', {
					span: (chunks) => <span>{chunks}</span>
				})}
			</p>

			<ul className={styles.walletsGroup}>
				{
					walletsData.map((wallet, index) => {
						return <li key={`Connect-Button-${index}`}>
							<ConnectButton
								icon={wallet.icon}
								text={wallet.name}
								onClick={() => {
									connect( { connector: wallet.connector } )
								}}
								isLoading={wallet.loading}
							/>
						</li>
					})
				}

			</ul>
		</div>
	);
};

export default Wallets;