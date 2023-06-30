'use client'

import styles from './Preload.module.scss'
import IcLogo  from '../../assets/images/icons/logo_key.svg'

const Preload = () => {
	return (
		<div id='preload' className={styles.preload}>
			<div className={styles['preload-body']}>
				<div className={styles['key-anim']}>
					<IcLogo />
				</div>
			</div>
		</div>
	)
}

export default Preload
