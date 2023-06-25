import './global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import ReduxProvider from '../../core/store/provider';
import WagmiProvider from '../../core/utils/wagmi/WagmiProvider';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { getMessages } from '../../core/utils/utils/getMessages';
import { Metadata } from 'next';
import Script from 'next/script';
import { Open_Sans, Nunito } from '@next/font/google';
import classNames from 'classnames';

const openSans = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800'],
	display: 'swap',
	variable: '--font-open-sans'
});

const nunito = Nunito({
	subsets: ['latin', 'cyrillic'],
	weight: ['700', '800'],
	display: 'swap',
	variable: '--font-nunito'
});

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export const metadata: Metadata = {
	themeColor: '#fff',
	openGraph: {
		type: 'website',
		url: 'https://cryptoflats.io',
		siteName: 'CryptoFlats',
	}
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
	const messages = await getMessages(locale);

	return (
		<html lang={locale} className={classNames(openSans.variable, nunito.variable)}>
		<head>
			<link rel='manifest' href='/manifest.json' />
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
			/>
			<meta property="og:image" content="https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/ea0d8174-f4c5-4de5-d8d0-233c40381500/cover" />
			<meta property="og:image:width" content="1000"/>
			<meta property="og:image:height" content="1000"/>
		</head>
		<body>
		<Script src='https://www.googletagmanager.com/gtag/js?id=G-DW47EZWVL0' />
		<Script id='google-analytics'>
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-DW47EZWVL0');
      `}
		</Script>
		<NextIntlClientProvider locale={locale} messages={messages}>
			<ReduxProvider>
				<WagmiProvider>
					<NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
						{children}
					</NextAppDirEmotionCacheProvider>
				</WagmiProvider>
			</ReduxProvider>
		</NextIntlClientProvider>
		</body>
		</html>
	);
}

