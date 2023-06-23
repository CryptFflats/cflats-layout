import styles from './Footer.module.scss'
import Container from '../../../../containers/Container/Container'
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons'
import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Home')

	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.row}>
					<div className={styles.terms}>
						<a href='/litepaper'>litepaper</a>
					</div>

					<div className={styles.copyright}>
						<p>
							<span>© 2022 Cryptoflats</span> {t('footer.all_rights_reserved')}
						</p>
					</div>

					<SocialIcons />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
