import styles from './About.module.scss'
import Container from '../../../../containers/Container/Container'
import classNames from 'classnames'
import { useTranslations } from 'next-intl';

const About = () => {
	const t = useTranslations('Home')

	return (
		<section id={'about'} className={styles.about}>
			<Container>
				<div
					className={classNames(
						styles.contentWrapper,
						styles.contentWrapperMargin
					)}
				>
					<h1 className={styles.title}>{t('about.first.title')}</h1>

					<p className={styles.text}>{t('about.first.paragraph')}</p>
				</div>

				<div className={styles.contentWrapper}>
					<h1 className={styles.title}>{t('about.second.title')}</h1>

					<p className={styles.text}>{t('about.second.paragraph')}</p>
				</div>
			</Container>
		</section>
	)
}

export default About
