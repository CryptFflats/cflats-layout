import { createConfig, configureChains, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { LedgerConnector } from 'wagmi/connectors/ledger'
import { ALCHEMY_KEY, WALLET_CONNECT_KEY } from '../constance';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet],
	[alchemyProvider({ apiKey: ALCHEMY_KEY }), publicProvider()],
)

// Set up wagmi config
export const config = createConfig({
	autoConnect: true,
	connectors: [
		new InjectedConnector({
			chains,
			options: {
				name: 'MetaMask',
				shimDisconnect: true,
			},
		}),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: 'Cryptoflats',
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				projectId: WALLET_CONNECT_KEY,
				//relayUrl: 'wss://relay.walletconnect.org'
			},
		}),
		// new LedgerConnector({
		// 	chains,
		// 	options: {
		// 	}
		// }),
	],
	publicClient,
	webSocketPublicClient,
})