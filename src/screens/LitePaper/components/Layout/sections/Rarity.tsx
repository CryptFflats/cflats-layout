'use client'

import styles from '../Layout.module.scss'
import { useTranslations } from 'next-intl';
import CfImage from '../../../../../components/CfImage/CfImage';

const Rarity = () => {
	const t = useTranslations('Litepaper')

	return (
		<div id='#rarity' className={styles['main-section']}>
			<h2 data-aos='fade-up'>{t('RARITY.title')}</h2>

			<p data-aos='fade-up'
				 className={styles['mb-30']}
				 dangerouslySetInnerHTML={{ __html: t.raw('RARITY.text') }}
			/>

			<ul>
				{['n1', 'n2', 'n3', 'n4'].map((item, index) => {
					return (
						<li key={index} data-aos='fade-up'>
							{t(`RARITY.list.${item}`)}
						</li>
					)
				})}
			</ul>

			<p data-aos='fade-up' dangerouslySetInnerHTML={{ __html: t.raw('RARITY.aboutText') }} />

			<CfImage data-aos='fade-up' src={'ae9189fd-691c-4d2e-3a05-bca15a684900/public'} alt={'Rarity example'} fluid />
		</div>
	)
}

export default Rarity
