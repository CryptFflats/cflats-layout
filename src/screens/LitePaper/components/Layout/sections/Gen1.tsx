'use client';

import styles from '../Layout.module.scss';
import CfImage from '../../../../../components/CfImage/CfImage';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Gen1 = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section id='#gen1' className={styles['main-section']}>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('GEN1.title')}
			</motion.h2>
			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				{t('GEN1.text')}
			</motion.p>

			{/*Standard*/}
			<motion.p className={styles['mb-30']}
								variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
			>
				<span>{t('GEN1.standard.title')}</span>
			</motion.p>

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
					src={'f84b5563-1d61-4bc4-b8d2-56d074184100/public'}
					alt={'gen#1 image'}
				/>
			</motion.div>

			<ul className={styles['mb-30']}>
				{
					['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
						return <motion.li
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							variants={fadeInUp}
							key={index}
						>
							{t(`GEN1.standard.passive.${item}`)}
						</motion.li>;
					})
				}
			</ul>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-60']}
			>
				{t('GEN1.standard.ps_skill')}
			</motion.p>

			{/*Silver*/}
			<motion.p
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.silver.title')}</span>
			</motion.p>

			<motion.div
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'0556ecd1-58ce-409d-e549-263236663b00/public'}
					alt={'gen#1 image'}
				/>
			</motion.div>


			<ul className={styles['mb-30']}>
				{
					['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
						return <motion.li
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							variants={fadeInUp}
							key={index}
						>
							{t(`GEN1.silver.passive.${item}`)}
						</motion.li>;
					})
				}
			</ul>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.active_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-30']}
			>
				{t('GEN1.silver.active')}
			</motion.p>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-60']}
			>
				{t('GEN1.silver.ps_skill')}
			</motion.p>


			{/*Gold*/}
			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-30']}
			>
				<span>{t('GEN1.gold.title')}</span>
			</motion.p>

			<motion.div
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'0b172315-839e-4902-48d2-4c325b484200/public'}
					alt={'gen#1 image'}
				/>
			</motion.div>

			<ul className={styles['mb-30']}>
				{
					['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
						return <motion.li
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							variants={fadeInUp}
							key={index}
						>
							{t(`GEN1.gold.passive.${item}`)}
						</motion.li>;
					})
				}
			</ul>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.active_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-30']}
			>
				{t('GEN1.gold.active')}
			</motion.p>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-60']}
			>
				{t('GEN1.gold.ps_skill')}
			</motion.p>

			{/*Diamond*/}
			<motion.p
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.diamond.title')}</span>
			</motion.p>

			<motion.div
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'cf77d0d9-17c5-4090-b3aa-ff9142115300/public'}
					alt={'gen#1 image'}
				/>
			</motion.div>


			<ul className={styles['mb-30']}>
				{
					['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
						return <motion.li
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							variants={fadeInUp}
							key={index}
						>
							{t(`GEN1.diamond.passive.${item}`)}
						</motion.li>;
					})
				}
			</ul>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.active_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-30']}
			>
				{t('GEN1.diamond.active')}
			</motion.p>

			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-60']}
			>
				{t('GEN1.diamond.ps_skill')}
			</motion.p>
		</motion.section>
	);
};

export default Gen1;
