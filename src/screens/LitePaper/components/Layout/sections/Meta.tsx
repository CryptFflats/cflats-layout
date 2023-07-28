'use client';

import styles from '../Layout.module.scss';
import CfImage from '../../../../../components/CfImage/CfImage';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Meta = () => {
	const t = useTranslations('Litepaper');
	const furniture = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14', 'n15', 'n16', 'n17', 'n18', 'n19', 'n20', 'n21', 'n22', 'n23'];

	return (
		<motion.section id='#meta' className={styles['main-section']}>
			<motion.h2
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				{t('GAME.title')}
			</motion.h2>

			<motion.p className={styles['mb-30']}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								variants={fadeInUp}
								dangerouslySetInnerHTML={{ __html: t.raw('GAME.text') }}
			/>


			<motion.p
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<span>{t('GAME.title')}</span>
			</motion.p>

			<ul>
				{furniture.map((item, index) => {
					return (
						<motion.li key={index}
											 initial={'hidden'}
											 whileInView='show'
											 viewport={{ once: true, amount: 0.5 }}
											 variants={fadeInUp}
						>
							{t(`GAME.rooms.list.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.p
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				{t('GAME.rooms.text2')}
			</motion.p>

			<motion.p
				className={styles['mb-30']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				dangerouslySetInnerHTML={{ __html: t.raw('GAME.rooms.text3') }}
			/>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				{t('GAME.rooms.text4')}
			</motion.p>

			<motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'ad09d4bd-1a62-4aad-ec3b-5105c0f6c300/public'}
					alt={'Game image'}
				/>
			</motion.div>

			<motion.p
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
				className={styles['mb-30']}
			>
				<span>{t('GAME.tenets_game.text')}</span>
			</motion.p>

			<ul className='m-0'>
				{['n1', 'n2', 'n3', 'n4',].map((item, index) => {
					return (
						<motion.li key={index}
											 initial={'hidden'}
											 whileInView='show'
											 viewport={{ once: true, amount: 0.5 }}
											 variants={fadeInUp}
						>
							{t(`GAME.tenets_game.list.${item}`)}
						</motion.li>
					);
				})}
			</ul>
		</motion.section>
	);
};

export default Meta;
