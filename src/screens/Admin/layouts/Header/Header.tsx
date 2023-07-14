'use client'

import styles from './Header.module.scss'
import Marquee from 'react-fast-marquee'
import Container from '../../../../containers/Container/Container';
import Logo from './Logo';
import Logout from './Logout';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<Logo />
				<Logout />
			</Container>
		</header>
	);
};

export default Header;