'use client'

import styles from './Team.module.scss'
import ContentBox from '../../../../containers/ContentBox/ContentBox'
import TitleBox from '../../../../components/TitleBox/TitleBox'
import CfImage from '../../../../components/CfImage/CfImage'
import classNames from 'classnames'
import { useTranslations } from 'next-intl';

const Team = () => {
	const t = useTranslations('Home')

	return (
		<ContentBox id={'team'} paddingBottomBig>
			<TitleBox className={styles.animBox}>
				<TitleBox.Title>{t('team.title')}</TitleBox.Title>
				<TitleBox.LineAnim className={styles.lineAnim} />
			</TitleBox>

			<p>{t('team.paragraph')}</p>

			<div className={styles.teamCards}>
				<div className={styles.teamCard}>
					<div className={classNames(styles.teamImg1, styles.teamImg)}>
						<CfImage
							src={'b310a282-6549-4a24-ffeb-c9bdc2795900/public'}
							alt={'Andrew Archie Icon'}
							fluid
						/>
					</div>
					<div className={styles.teamCardAbout}>
						<h1>{t('team.persons.Andrew.name')}</h1>
						<p dangerouslySetInnerHTML={{ __html: t.raw('team.persons.Andrew.about') }} />
					</div>
				</div>

				<div className={styles.teamCard}>
					<div className={classNames(styles.teamImg2, styles.teamImg)}>
						<CfImage
							src={'790fa9bb-d45a-4014-0d35-eb1c66926700/public'}
							alt={'Max Frei Icon'}
							fluid
						/>
					</div>
					<div className={styles.teamCardAbout}>
						<h1>{t('team.persons.Max.name')}</h1>
						<p dangerouslySetInnerHTML={{ __html: t.raw('team.persons.Max.about') }} />
					</div>
				</div>
			</div>
		</ContentBox>
	)
}

export default Team
