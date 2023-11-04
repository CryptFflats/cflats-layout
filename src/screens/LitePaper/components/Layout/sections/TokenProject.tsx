'use client';

import styles from '../Layout.module.scss';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const TokenProject = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#token-project'
			className={styles['main-section']}
		>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('CFLAT_TOKEN.title')}
			</motion.h2>

			<motion.p 
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('CFLAT_TOKEN.text_1') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('CFLAT_TOKEN.text_2') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('CFLAT_TOKEN.text_3') }}
			/>

			<ul className={styles.strong}>
				{['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							{t(`CFLAT_TOKEN.list.${item}`)}
						</motion.li>
					);
				})}
			</ul>

		</motion.section>
	);
};

export default TokenProject;
