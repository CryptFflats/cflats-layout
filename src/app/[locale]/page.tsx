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
		}
	};
}

export default function HomePage() {
  return (
      <Home />
  );
}