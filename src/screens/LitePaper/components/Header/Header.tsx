'use client'

import styles from './Header.module.scss'
import classNames from 'classnames'
import IcKeyBlack  from '../../../../assets/images/icons/logo_key_black.svg'
import { useTranslations } from 'next-intl';

const Header = () => {
	const t = useTranslations('Litepaper')

	return (
		<div className={classNames(styles.header, styles.headerRow)}>
			<div className={styles['header-col-420']}>
				<a href='/' className={styles.backToMain}>
					{t('navigation.return_to_site')}
				</a>
			</div>

			<div className={styles['header-col-890']}>
				<div className={styles['key-anim__wrapper']}>
					<i className={styles['key-anim']}>
						<IcKeyBlack />
					</i>
				</div>
			</div>
		</div>
	)
}

export default Header
