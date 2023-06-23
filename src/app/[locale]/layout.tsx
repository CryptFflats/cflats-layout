import './global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import ReduxProvider from '../../core/store/provider';
import WagmiProvider from '../../core/utils/wagmi/WagmiProvider';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { getMessages } from '../../core/utils/utils/getMessages';
import { Metadata } from 'next';

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export const metadata: Metadata = {
	openGraph: {
		type: 'website',
		url: 'https://cryptoflats.io',
		siteName: 'CryptoFlats',
	},
}

export default async function LocaleLayout({
																						 children,
																						 params: { locale }
																					 }: Props) {
	const messages = await getMessages(locale);



	return (
		<html lang={locale}>
		<head>
			<link rel='manifest' href='/manifest.json' />
			<meta name='theme-color' content='#ffffff' />
			{/*<link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet' />*/}
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
			/>
			<meta property='og:image' content='https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/ea0d8174-f4c5-4de5-d8d0-233c40381500/cover' />

		</head>
		<body>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<ReduxProvider>
					<WagmiProvider>
						<NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
							{children}
						</NextAppDirEmotionCacheProvider>
					</WagmiProvider>
				</ReduxProvider>
			</NextIntlClientProvider>

			<script>
				AOS.init();
			</script>
		</body>
		</html>
	);
}

