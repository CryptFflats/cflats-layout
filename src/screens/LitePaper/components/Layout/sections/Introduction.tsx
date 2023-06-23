import styles from '../Layout.module.scss'
import CfImage from '../../../../../components/CfImage/CfImage'
import { useTranslations } from 'next-intl';


const Introduction = () => {
	const t = useTranslations('Litepaper')

	return (
		<div id='#introduction' className={styles['main-section']}>
			<h2 data-aos='fade-up'>{t('INTRODUCTION.title')}</h2>

			<p data-aos='fade-up' dangerouslySetInnerHTML={{ __html: t.raw('INTRODUCTION.text') }} />

			<CfImage
				data-aos='fade-up'
				fluid
				src='eda4608a-5a13-4423-ac0a-6460e1785700/public'
				alt='Introduction'
			/>
		</div>
	)
}

export default Introduction
