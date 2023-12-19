import styles from './Footer.module.scss'
import Container from '../../../../containers/Container/Container'
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons'
import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Home');
	const getCurrentYear = () => {
		return new Date().getFullYear();
	}

	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.row}>
					<div className={styles.terms}>
						<a href='https://docs.cryptoflats.io'>litepaper</a>
					</div>

					<div className={styles.copyright}>
						<p>
							<span>Cryptoflats 2022 - {getCurrentYear()} ©</span> {t('footer.all_rights_reserved')}
						</p>
					</div>

					<SocialIcons />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
