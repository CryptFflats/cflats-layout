'use client'

import styles from './Header.module.scss'
import IcKey from '../../../../assets/images/icons/logo_key.svg'


const Logo = () => {

  return (
		<div className={styles.logo}>
			<i className={styles.key}>
				<IcKey />
			</i>
			<h1>RYPTOFLATS</h1>
			<p>Admin panel</p>
		</div>
	)
}

export default Logo
