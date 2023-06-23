'use client'

import styles from './Logo.module.scss'
import IcKey from '../../../../assets/images/icons/logo_key.svg'
import {useTranslations} from "next-intl";


const Logo = () => {
	const t = useTranslations('Info')

  return (
		<div className={styles.logo}>
			<i className={styles.key}>
				<IcKey />
			</i>
			<h1>RYPTOFLATS</h1>
			<p dangerouslySetInnerHTML={{ __html: t.raw('about_cryptoflats') }} />
		</div>
	)
}

export default Logo
