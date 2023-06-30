import Home from "../../screens/Home/Home";
import { createTranslator } from 'next-intl';
import { getMessages } from '../../core/utils/utils/getMessages';
import { Metadata } from 'next';

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
	const messages = await getMessages(locale);

	const t = createTranslator({locale, messages});

	return {
		title: t('MetaData.Home.title'),
		description: t('MetaData.Home.description'),
		openGraph: {
			title: t('MetaData.Home.title'),
			description: t('MetaData.Home.description'),
			images: {
				url: 'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/e402f1cf-2a33-4284-de2c-45d0e4c59f00/cover'
			}
		}
	};
}

export default function HomePage() {
  return (
      <Home />
  );
}