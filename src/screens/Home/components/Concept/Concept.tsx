'use client'

import styles from './Concept.module.scss'
import classNames from 'classnames'
import { useTranslations } from 'next-intl';
import ContentBox from '../../../../containers/ContentBox/ContentBox';
import TitleBox from '../../../../components/TitleBox/TitleBox';
import * as process from 'process';
import { CDN_URL } from '../../../../core/utils/constance';

const Concept = () => {
	const t = useTranslations('Home')
	const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY

	return (
		<ContentBox paddingTopBig>
			<TitleBox className={styles.animBox}>
				<TitleBox.Title>{t('concept.title')}</TitleBox.Title>
				<TitleBox.LineAnim className={styles.lineAnim} />
			</TitleBox>

			<div className={styles.row}>
				<div className={styles.rowCol}>
					<p>{t('concept.paragraph')}</p>
				</div>
				<div className={classNames(styles.rowCol, styles.flex)}>
					<div className={styles.buildAnimation}>
						<img src={`${CDN_URL}/build-anim.webp`} alt={'Concept Animation'} />
					</div>
				</div>
			</div>
		</ContentBox>
	)
}

export default Concept
