'use client';

import styles from '../Layout.module.scss';
import CfImage from '../../../../../components/CfImage/CfImage';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Dapp = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#dapp'
			className={styles['main-section']}
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title')}
			</motion.h2>

			<motion.p variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								className={styles['mb-30']}
								dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.functions.select') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.functions.stake') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.functions.unstake') }}
			/>


			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.functions.claim') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.functions.view') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.aboutText') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				<CfImage
					fluid
					alt={'Dapp image'}
					src={'37255c0d-7b2e-4bc6-fffc-eb60c17b7f00/public'}
				/>
			</motion.div>
		</motion.section>
	);
};

export default Dapp;
