'use client'

import styles from '../Layout.module.scss'
import CfImage from '../../../../../components/CfImage/CfImage'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Gen1 = () => {
	const t = useTranslations('Litepaper')
	// const standardList: string[] = t('GEN1.standard.list', {
	// 	returnObjects: true
	// })
	// const silverList: string[] = t('GEN1.silver.list', {
	// 	returnObjects: true
	// })
	// const goldList: string[] = t('GEN1.gold.list', {
	// 	returnObjects: true
	// })
	// const diamondList: string[] = t('GEN1.diamond.list', {
	// 	returnObjects: true
	// })
	// const mintList: string[] = t('GEN1.mint.list', {
	// 	returnObjects: true
	// })
	// const stakingList: string[] = t('GEN1.staking.list', {
	// 	returnObjects: true
	// })

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
			<motion.p className={styles['mb-10']}
				 					variants={fadeInUp}
								 initial={'hidden'}
								 whileInView='show'
								 viewport={{ once: true, amount: 0.5 }}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>
			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.standard.passive')}
				</motion.li>
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-60']}
			>
				<CfImage
					data-aos='fade-up'
					fluid
					src={'f84b5563-1d61-4bc4-b8d2-56d074184100/public'}
					alt={'gen#1 image'}
				/>
			</motion.div>

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
			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.silver.passive')}
				</motion.li>
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

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.silver.active')}
				</motion.li>
			</ul>

			<motion.div
				className={styles['mb-60']}
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

			<motion.p className={styles['mb-10']}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.gold.passive')}
				</motion.li>
			</ul>

			<motion.p className={styles['mb-10']}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								variants={fadeInUp}
			>
				<span>{t('GEN1.active_skill')}</span>
			</motion.p>

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.gold.active')}
				</motion.li>
			</ul>

			<motion.div
				className={styles['mb-60']}
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
			<motion.p
				className={styles['mb-10']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GEN1.passive_skill')}</span>
			</motion.p>

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.diamond.passive')}
				</motion.li>
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

			<ul className={styles['mb-30']}>
				<motion.li
					initial={'hidden'}
					whileInView='show'
					viewport={{ once: true, amount: 0.5 }}
					variants={fadeInUp}
				>
					{t('GEN1.diamond.active')}
				</motion.li>
			</ul>

			<motion.div
				className={styles['mb-60']}
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

			{/*Mint Nft*/}
			{/*<p data-aos='fade-up' className={styles['mb-30']}>*/}
			{/*	<span>{t('GEN1.mint.title')}</span>*/}
			{/*</p>*/}
			{/*<ul>*/}
			{/*	{mintList.map((item, index) => {*/}
			{/*		return (*/}
			{/*			<li key={index} data-aos='fade-up'>*/}
			{/*				{item}*/}
			{/*			</li>*/}
			{/*		)*/}
			{/*	})}*/}
			{/*</ul>*/}

			{/*Staking Nft*/}
			{/*<p data-aos='fade-up' className={styles['mb-30']}>*/}
			{/*	<span>{t('GEN1.staking.title')}</span>*/}
			{/*</p>*/}
			{/*<ul className={styles['mb-60']}>*/}
			{/*	{stakingList.map((item, index) => {*/}
			{/*		return (*/}
			{/*			<li key={index} data-aos='fade-up'>*/}
			{/*				{item}*/}
			{/*			</li>*/}
			{/*		)*/}
			{/*	})}*/}
			{/*</ul>*/}
		</motion.section>
	)
}

export default Gen1
