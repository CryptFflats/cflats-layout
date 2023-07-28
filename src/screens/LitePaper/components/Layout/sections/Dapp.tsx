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
								dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_1') }}
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
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_2') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CfImage
					fluid
					alt={'Dapp image'}
					src={'bb1a23c2-72a7-4a3b-5688-ecf0186a7600/public'}
				/>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_3') }}
			/>
		</motion.section>
	);
};

export default Dapp;
