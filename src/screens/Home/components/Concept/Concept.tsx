'use client'

import styles from './Concept.module.scss'
import classNames from 'classnames'
import { useTranslations } from 'next-intl';
import ContentBox from '../../../../containers/ContentBox/ContentBox';
import TitleBox from '../../../../components/TitleBox/TitleBox';
import { CDN_URL } from '../../../../core/utils/constance';

const Concept = () => {
	const t = useTranslations('Home')

	return (
		<ContentBox paddingTopBig>
			<TitleBox className={styles.animBox}>
				<TitleBox.Title>{t('concept.title')}</TitleBox.Title>
				<TitleBox.LineAnim className={styles.lineAnim} theme={"purple"}/>
			</TitleBox>

			<div className={styles.row}>
				<div className={styles.rowCol}>
					<p>{t('concept.paragraph')}</p>
				</div>
				<div className={classNames(styles.rowCol, styles.flex)}>
					<div className={styles.buildAnimation}>
						<img src={`${CDN_URL}/videos/build-anim.webp`} alt={'Concept Animation'} />
					</div>
				</div>
			</div>
		</ContentBox>
	)
}

export default Concept
