'use client'

import styles from '../Layout.module.scss'
import CfImage from '../../../../../components/CfImage/CfImage'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Gen0 = () => {
	const t = useTranslations('Litepaper')

	return (
		<motion.section id='#gen0' className={styles['main-section']}>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('GEN0.title')}
			</motion.h2>

			<motion.p className={styles['mb-30']}
				 variants={fadeInUp}
				 initial={'hidden'}
				 whileInView='show'
				 viewport={{ once: true, amount: 0.5 }}
			>
				<span>{t('GEN0.gold_pass.text')}</span>
			</motion.p>

			<ul>
				{['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
					return (
						<motion.li key={index}
											 variants={fadeInUp}
											 initial={'hidden'}
											 whileInView='show'
											 viewport={{ once: true, amount: 0.5 }}
						>
							{t(`GEN0.gold_pass.list.${item}`)}
						</motion.li>
					)
				})}
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CfImage
					data-aos='fade-up'
					fluid
					src={'d929403a-aad3-4272-99c8-2be48831aa00/public'}
					alt={'Gen#0 Gold image'}
				/>
			</motion.div>

			<motion.p  className={styles['mb-30']}
								 variants={fadeInUp}
								 initial={'hidden'}
								 whileInView='show'
								 viewport={{ once: true, amount: 0.5 }}
			>
				<span>{t('GEN0.diamond_pass.text')}</span>
			</motion.p>

			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
					return (
						<motion.li key={index}
											 variants={fadeInUp}
											 initial={'hidden'}
											 whileInView='show'
											 viewport={{ once: true, amount: 0.5 }}
						>
							{t(`GEN0.diamond_pass.list.${item}`)}
						</motion.li>
					)
				})}
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				<CfImage
					data-aos='fade-up'
					fluid
					src={'31488b7a-fa1c-4027-52d0-38eb0727ca00/public'}
					alt={'Gen#0 Gold image'}
				/>
			</motion.div>
		</motion.section>
	)
}

export default Gen0
