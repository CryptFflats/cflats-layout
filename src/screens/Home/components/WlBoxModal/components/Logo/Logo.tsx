'use client';

import styles from './Logo.module.scss';
import IcKey from '../../../../../../assets/images/icons/logo_key.svg';

/**
 * TODO: Перенести этот компонент в общую папку UI,
 * потому что такой же используется в хедере в модалке саппорта
 */
const Logo = () => {
	return (
		<div className={styles.logo}>
			<i className={styles.key}>
				<IcKey />
			</i>
			<h1>RYPTOFLATS</h1>
		</div>
	);
};

export default Logo;
