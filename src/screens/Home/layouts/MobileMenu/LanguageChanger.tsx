'use client'

import styles from './MobileMenu.module.scss'
import { useLocale } from 'use-intl';

const LanguageChanger = () => {
	const locale = useLocale();

	return (
		<div className={styles.languageChanger}>
			<a href={locale === 'en' ? '/ru' : '/en'}>{locale}</a>
			<span>{' '}/{' '}</span>
			<span>{locale === 'en' ? 'ru' : 'en'}</span>
		</div>
	);
};

export default LanguageChanger;