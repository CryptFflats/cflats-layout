import styles from '../Layout.module.scss'
import CfImage from '../../../../../components/CfImage/CfImage'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';


const Introduction = () => {
	const t = useTranslations('Litepaper')

	return (
		<motion.section
			id='#introduction'
			className={styles['main-section']}
			viewport={{ once: true }}
		>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('INTRODUCTION.title')}
			</motion.h2>

			<motion.p
				initial={'hidden'}
				whileInView="show"
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('INTRODUCTION.text') }}
			/>

			<motion.div
				initial={'hidden'}
				whileInView="show"
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
			>
				<CfImage
					data-aos='fade-up'
					fluid
					src='eda4608a-5a13-4423-ac0a-6460e1785700/public'
					alt='Introduction'
				/>
			</motion.div>
		</motion.section>
	)
}

export default Introduction
