'use client';

import styles from './Logo.module.scss';
import IcKey from 'assets/images/icons/logo_key.svg';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<i className={styles.key}>
				<IcKey />
			</i>
			<h1>RYPTOFLATS</h1>
		</div>
	);
};
