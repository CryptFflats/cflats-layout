'use client';

import styles from '../Layout.module.scss';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Collection = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#collection'
			className={styles['main-section']}
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('ABOUT_COLLECTION.title')}
			</motion.h2>

			<motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('ABOUT_COLLECTION.text') }} 
			/>

			<ul className={'mb-0'}>
				{['n1', 'n2', 'n3', 'n4', 'n5', 'n6'].map((item, index: number) => (
					<motion.li 
						initial={'hidden'}
						whileInView='show'
						variants={fadeInUp}
						viewport={{ once: true, amount: 0.5 }}
						key={index}
					>
						{t(`ABOUT_COLLECTION.list.${item}`)}
					</motion.li>
				))}
			</ul>
		</motion.section>
	);
};

export default Collection;
