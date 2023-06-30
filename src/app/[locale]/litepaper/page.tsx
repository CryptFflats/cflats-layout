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
			images: {
				url: "https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/ea0d8174-f4c5-4de5-d8d0-233c40381500/cover"
			}
		}
	};
}

const LitePaperPage = () => {
	return (
		<LitePaper />
	);
};

export default LitePaperPage;