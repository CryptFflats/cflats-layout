'use client';

import styles from './Team.module.scss';
import ContentBox from '../../../../containers/ContentBox/ContentBox';
import TitleBox from '../../../../components/TitleBox/TitleBox';
import CfImage from '../../../../components/CfImage/CfImage';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

const Team = () => {
	const t = useTranslations('Home');

	return (
		<ContentBox id={'team'} paddingBottomBig>
			<TitleBox className={styles.animBox}>
				<TitleBox.Title>{t('team.title')}</TitleBox.Title>
				<TitleBox.LineAnim className={styles.lineAnim} theme={'green'} />
			</TitleBox>

			<p>{t('team.paragraph')}</p>

			<div className={styles.teamCards}>
				<div className={styles.teamCard}>
					<div className={styles.teamCardContent}>
						<div className={classNames(styles.teamImg1, styles.teamImg)}>
							<CfImage
								src={'b310a282-6549-4a24-ffeb-c9bdc2795900/public'}
								alt={'Andrew Archie Icon'}
								fluid
							/>
						</div>
						<div className={styles.teamCardAbout}>
							<h1>{t('team.persons.Andrew.name')}</h1>
							<p
								className={styles.pText}
								dangerouslySetInnerHTML={{
									__html: t.raw('team.persons.Andrew.about')
								}}
							/>
						</div>
					</div>
					<a
						className={`${styles.btnDiscord} ${styles.themeColorPink}`}
						href={'https://discordapp.com/users/834879781064933398'}
						target='_blank'
					>
						discord
					</a>
				</div>

				<div className={styles.teamCard}>
					<div className={styles.teamCardContent}>
						<div className={classNames(styles.teamImg2, styles.teamImg)}>
							<CfImage
								src={'790fa9bb-d45a-4014-0d35-eb1c66926700/public'}
								alt={'Max Frei Icon'}
								fluid
							/>
						</div>
						<div className={styles.teamCardAbout}>
							<h1>{t('team.persons.Max.name')}</h1>
							<p
								className={styles.pText}
								dangerouslySetInnerHTML={{
									__html: t.raw('team.persons.Max.about')
								}}
							/>
						</div>
					</div>
					<a
						className={`${styles.btnDiscord} ${styles.themeColorYellow}`}
						href={'https://discordapp.com/users/343098956772933632'}
						target='_blank'
					>
						discord
					</a>
				</div>

				<div className={styles.teamCard}>
					<div className={styles.teamCardContent}>
						<div
							className={classNames(
								styles.teamImg3,
								styles.teamImg,
								styles.teamImg3Resize
							)}
						>
							<CfImage
								src={'7a355d6e-c0d7-41b2-3703-7de70974cf00/public'}
								alt={'Nice Arti Icon'}
								fluid
							/>
						</div>
						<div className={styles.teamCardAbout}>
							<h1>{t('team.persons.ThreeFiveSeven.name')}</h1>
							<p
								className={styles.pText}
								dangerouslySetInnerHTML={{
									__html: t.raw('team.persons.ThreeFiveSeven.about')
								}}
							/>
						</div>
					</div>
					<a
						className={`${styles.btnDiscord} ${styles.themeColorGreen}`}
						href={'https://discordapp.com/users/520645203502170122'}
						target='_blank'
					>
						discord
					</a>
				</div>

				<div className={styles.teamCard}>
					<div className={styles.teamCardContent}>
						<div
							className={classNames(
								styles.teamImg4,
								styles.teamImg,
								styles.teamImg3Resize
							)}
						>
							<CfImage
								src={'95f50c5e-9664-4b67-9648-85dcb77f1300/public'}
								alt={'Nice Arti Icon'}
								fluid
							/>
						</div>
						<div className={styles.teamCardAbout}>
							<h1>{t('team.persons.NiceArti.name')}</h1>
							<p
								className={styles.pText}
								dangerouslySetInnerHTML={{
									__html: t.raw('team.persons.NiceArti.about')
								}}
							/>
						</div>
					</div>
					<a
						className={`${styles.btnDiscord} ${styles.themeColorPurple}`}
						href={'https://discordapp.com/users/615956496089612328'}
						target='_blank'
					>
						discord
					</a>
				</div>
			</div>
		</ContentBox>
	);
};

export default Team;
