'use client'

import styles from '../Layout.module.scss'
import { useTranslations } from 'next-intl';

const Collection = () => {
	const t = useTranslations('Litepaper')

	return (
		<div id='#collection' className={styles['main-section']}>
			<h2 data-aos='fade-up'>{t('ABOUT_COLLECTION.title')}</h2>

			<p data-aos='fade-up' dangerouslySetInnerHTML={{ __html: t.raw('ABOUT_COLLECTION.text') }} />

			<ul className={'mb-0'}>
				{['n1', 'n2', 'n3', 'n4', 'n5', 'n6'].map((item, index: number) => (
					<li data-aos='fade-up' key={index}>
						{t(`ABOUT_COLLECTION.list.${item}`)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Collection
