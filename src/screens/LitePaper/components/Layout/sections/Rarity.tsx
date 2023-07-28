'use client';

import styles from '../Layout.module.scss';
import { useTranslations } from 'next-intl';
import CfImage from '../../../../../components/CfImage/CfImage';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Rarity = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#rarity'
			className={styles['main-section']}
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2 variants={fadeInUp}
								 initial={'hidden'}
								 whileInView='show'
								 viewport={{ once: true, amount: 0.5 }}
			>
				{t('RARITY.title')}
			</motion.h2>

			<motion.p
				variants={fadeInUp}
				 initial={'hidden'}
				 whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				 className={styles['mb-30']}
				 dangerouslySetInnerHTML={{ __html: t.raw('RARITY.text') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('RARITY.list_text_1') }}
			/>

			<ul>
				{['n1', 'n2'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView="show"
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							{t(`RARITY.list_1.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CfImage src={'823e4c84-df23-4aed-8f01-9e6a8c7dae00/public'} alt={'Rarity example'} fluid />
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('RARITY.list_text_2') }}
			/>

			<ul>
				{['n1', 'n2', 'n3', 'n4'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView="show"
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							{t(`RARITY.list_2.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CfImage src={'7212ad44-b525-4c2f-bcc6-551b52cf2200/public'} alt={'Rarity example'} fluid />
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('RARITY.aboutText') }}
			/>

		</motion.section>
	);
};

export default Rarity;
