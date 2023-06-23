'use client'

import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from './config';

const WagmiProvider = ({ children } : { children: ReactNode }) => {
	return (
		<WagmiConfig config={config}>
			{children}
		</WagmiConfig>
	);
};

export default WagmiProvider