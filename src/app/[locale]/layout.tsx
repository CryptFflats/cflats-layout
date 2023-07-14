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
import AuthProvider from '../../core/providers/AuthProvider';

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
	title: 'Cryptoflats',
	themeColor: '#fff',
	manifest: '/manifest.json',
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
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
			/>
			<Script type="text/javascript">
				{`
					<!-- Yandex.Metrika counter -->
							 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							 m[i].l=1*new Date();
							 for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
							 k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
						
							 ym(94107530, "init", {
										clickmap:true,
										trackLinks:true,
										accurateTrackBounce:true
							 });
					<!-- /Yandex.Metrika counter -->
				`}
			</Script>
			<noscript><div><img src="https://mc.yandex.ru/watch/94107530" style={{position:'absolute', left: '-9999px'}} alt="" /></div></noscript>
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

