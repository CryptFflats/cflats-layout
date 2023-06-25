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
			<meta name="yandex-verification" content="90ddaeffb810e21a" />
			<meta name="google-site-verification" content="Hhf3ISRXwjlZILhTPf2JkySLOcKV4p0Ftmj4plc2zvs" />
			<Script id='yandex-metrika'>
				{`
					<!-- Yandex.Metrika counter -->
					<script type="text/javascript" >
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
					</script>
					<noscript><div><img src="https://mc.yandex.ru/watch/94107530" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
					<!-- /Yandex.Metrika counter -->
				`}
			</Script>
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

