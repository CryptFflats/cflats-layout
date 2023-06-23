import Home from "../../screens/Home/Home";
import { createTranslator } from 'next-intl';
import { getMessages } from '../../core/utils/utils/getMessages';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	params: {locale: string};
};


export async function generateMetadata({params: {locale}}: any) {
	const messages = await getMessages(locale);

	const t = createTranslator({locale, messages});

	return {
		title: t('MetaData.Home.title'),
		description: t('MetaData.Home.description'),
		openGraph: {
			title: t('MetaData.Home.title'),
			description: t('MetaData.Home.description'),
		}
	};
}

// export const metadata = {
// 	title: 'Cryptoflats - Home'
// }

export default function HomePage() {
  return (
      <Home />
  );
}