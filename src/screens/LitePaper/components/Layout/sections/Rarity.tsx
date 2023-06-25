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
							{t(`RARITY.list.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('RARITY.aboutText') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
			>
				<CfImage src={'ae9189fd-691c-4d2e-3a05-bca15a684900/public'} alt={'Rarity example'} fluid />
			</motion.div>

		</motion.section>
	);
};

export default Rarity;
