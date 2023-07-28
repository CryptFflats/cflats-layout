import { motion } from 'framer-motion';
import styles from '../Layout.module.scss';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';
import { useTranslations } from 'next-intl';
import CfImage from '../../../../../components/CfImage/CfImage';

const Lands = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section id='#lands' className={styles['main-section']}>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('LANDS.title')}
			</motion.h2>

			<motion.p className={styles['mb-30']}
								variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								dangerouslySetInnerHTML={{ __html: t.raw('LANDS.text_1') }}
			/>

			<motion.p className={styles['mb-30']}
								variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								dangerouslySetInnerHTML={{ __html: t.raw('LANDS.text_2') }}
			/>

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
					src={'843ad314-3137-4565-866a-52bf92c5e700/public'}
					alt={'Lands image'}
				/>
			</motion.div>

			<motion.p className={styles['mb-30']}
								variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								dangerouslySetInnerHTML={{ __html: t.raw('LANDS.list_text') }}
			/>

			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
					return (
						<motion.li key={index}
											 variants={fadeInUp}
											 initial={'hidden'}
											 whileInView='show'
											 viewport={{ once: true, amount: 0.5 }}
						>
							{t(`LANDS.list.${item}`)}
						</motion.li>
					)
				})}
			</ul>

			<motion.p className={styles['mb-60']}
								variants={fadeInUp}
								initial={'hidden'}
								whileInView='show'
								viewport={{ once: true, amount: 0.5 }}
								dangerouslySetInnerHTML={{ __html: t.raw('LANDS.text_3') }}
			/>
		</motion.section>
	);
};

export default Lands;