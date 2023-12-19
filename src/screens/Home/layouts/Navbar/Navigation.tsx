'use client';

import { useAppDispatch } from 'core/hooks/store.hook';
import styles from './Navbar.module.scss';
import { useTranslations } from 'next-intl';
import { setDevelopment } from '../../../../core/store/slices/ModalSlice';

const Navigation = () => {
	const t = useTranslations('Home');
	const dispatch = useAppDispatch();

	const getInDevelopment = (e: any) => {
		dispatch(setDevelopment(true));
	}

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
				<a target='_blank' href="https://docs.cryptoflats.io">{t(`navigation.litepaper.title`)}</a>
			</li>
			<li>
				<a className={styles.navDapp} onClick={(e: any) => getInDevelopment(e)}>open dapp</a>
			</li>
		</ul>
	);
};

export default Navigation;
