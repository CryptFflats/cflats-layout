'use client'

import styles from '../Layout.module.scss'
import { useTranslations } from 'next-intl';


const Concept = () => {
	const t = useTranslations('Litepaper')

	return (
		<div id='#concept' className={styles['main-section']}>
			<h2 data-aos='fade-up'>{t('CONCEPT.title')}</h2>

			<p data-aos='fade-up' dangerouslySetInnerHTML={{ __html: t.raw('CONCEPT.text') }} />
		</div>
	)
}

export default Concept
