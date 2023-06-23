'use client'

import styles from '../Layout.module.scss'
import { useTranslations } from 'next-intl';

const TokenProject = () => {
	const t = useTranslations('Litepaper')

	return (
		<div id='#token-project' className={styles['main-section']}>
			<h2 data-aos='fade-up'>{t('CFLAT_TOKEN.title')}</h2>

			<p data-aos='fade-up'
				 className={styles['mb-30']}
				 dangerouslySetInnerHTML={{ __html: t.raw('CFLAT_TOKEN.text') }}
			/>

			{/*<ul className={styles.strong}>*/}
			{/*	{list.map((item, index) => {*/}
			{/*		return (*/}
			{/*			<li key={index} data-aos='fade-up'>*/}
			{/*				{item}*/}
			{/*			</li>*/}
			{/*		)*/}
			{/*	})}*/}
			{/*</ul>*/}

			<p data-aos='fade-up'
				 className={styles['mb-0']}
				 dangerouslySetInnerHTML={{ __html: t.raw('CFLAT_TOKEN.aboutText') }}
			/>
		</div>
	)
}

export default TokenProject
