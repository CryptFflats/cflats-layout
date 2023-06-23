'use client'

import dynamic from 'next/dynamic'
import styles from './Navbar.module.scss'
import Logo from '../../UI/Logo/Logo'
import Navigation from './Navigation'
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons'
import Burger from './Burger'
const ProfileButton = dynamic(() => import("../../UI/ProfileButton/ProfileButton"), {
	ssr: false,
});
const WalletButton = dynamic(() => import("../../UI/WalletButton/WalletButton"), {
	ssr: false,
});

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Logo />

				<div className={styles.group}>
					<Navigation />
					<SocialIcons className={styles.socialIcons} />

					<WalletButton />
					<ProfileButton />

					<Burger />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
