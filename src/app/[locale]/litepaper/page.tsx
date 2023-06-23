import { getMessages } from '../../../core/utils/utils/getMessages';
import { createTranslator } from 'next-intl';
import LitePaper from '../../../screens/LitePaper/LitePaper';

export async function generateMetadata({params: {locale}}: any) {
	const messages = await getMessages(locale);

	const t = createTranslator({locale, messages});

	return {
		title: 'Cryptoflats - LitePaper',
		description: t('MetaData.LitePaper.description'),
		openGraph: {
			title: 'Cryptoflats - LitePaper',
			description: t('MetaData.LitePaper.description'),
		}
	};
}

const LitePaperPage = () => {
	return (
		<LitePaper />
	);
};

export default LitePaperPage;