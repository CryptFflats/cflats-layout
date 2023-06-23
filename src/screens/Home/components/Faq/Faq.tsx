'use client';

import styles from './Faq.module.scss';
import ContentBox from '../../../../containers/ContentBox/ContentBox';
import { useTranslations } from 'next-intl';
import { FaqAccordion, FaqAccordionDetails, FaqAccordionSummary, FaqExpandIcon } from './styles';
import { Box } from '@mui/material';


const Faq = () => {
	const t = useTranslations('Home');

	return (
		<ContentBox id={'faq'} color={'blue'}>
			<h1 className={styles.title}>FAQ</h1>

			<Box>
				{
					['q1', 'q2', 'q3', 'q4', 'q5', 'q6'].map((item, index) => {
						return (
							<FaqAccordion key={`Faq-Accordion-item-${index}`}>
								<FaqAccordionSummary>
									<div className={styles.accordionHeader}>
										<p className={styles.accordionQuestion}>{t(`faq.${item}.question`)}</p>
									</div>
									<FaqExpandIcon />
								</FaqAccordionSummary>
								<FaqAccordionDetails>
									<p className={styles.accordionAnswer}>{t(`faq.${item}.answer`)}</p>
								</FaqAccordionDetails>
							</FaqAccordion>
						);
					})
				}
			</Box>
		</ContentBox>
	);
};

export default Faq;