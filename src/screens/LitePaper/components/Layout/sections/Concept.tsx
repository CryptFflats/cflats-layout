'use client'

import styles from '../Layout.module.scss'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Concept = () => {
	const t = useTranslations('Litepaper')

	return (
		<motion.section id='#concept'
										className={styles['main-section']}
										viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('CONCEPT.title')}
			</motion.h2>

			<motion.p
				initial={'hidden'}
				whileInView="show"
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONCEPT.text') }}
			/>
		</motion.section>
	)
}

export default Concept
