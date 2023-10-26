'use client';

import styles from './Navbar.module.scss';
import { useTranslations } from 'next-intl';

const Navigation = () => {
	const t = useTranslations('Home');

	return (
		<ul className={styles.navigation}>
			<li>
				<a href={t(`navigation.about.path`)}>{t(`navigation.about.title`)}</a>
			</li>
			<li>
				<a href={t(`navigation.roadmap.path`)}>{t(`navigation.roadmap.title`)}</a>
			</li>
			<li>
				<a href={t(`navigation.team.path`)}>{t(`navigation.team.title`)}</a>
			</li>
			<li>
				<a href={t(`navigation.faq.path`)}>{t(`navigation.faq.title`)}</a>
			</li>
			<li>
				<a href={t(`navigation.litepaper.path`)}>{t(`navigation.litepaper.title`)}</a>
			</li>
			<li>
				<a className={styles.navDapp} href={t(`navigation.dapp.path`)}>open dapp</a>
			</li>
		</ul>
	);
};

export default Navigation;
