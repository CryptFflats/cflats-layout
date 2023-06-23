'use client'

import styles from './MobileMenu.module.scss'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setMenuActive } from '../../../../core/store/slices/MenuSlice';
import { enableBodyScroll } from 'body-scroll-lock';
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons';

interface NavLink {
	path: string
	title: string
}

const MobileMenu = () => {
	const { isMenuActive } = useAppSelector(state => state.MenuSlice)
	const dispatch = useAppDispatch()
	const t = useTranslations('Home')
	const navigationLinks = ['about', 'roadmap', 'team', 'faq', 'litepaper']

	const closeMenu = () => {
		dispatch(setMenuActive(false))
		enableBodyScroll(document.body)
	}

	return (
		<div
			className={classNames(styles.mobileMenu, isMenuActive && styles.visible)}
		>
			<ul className={styles.navList}>
				{navigationLinks.map((item, index) => {
					return (
						<li key={index}>
							<a onClick={closeMenu} href={t(`navigation.${item}.path`)}>
								{t(`navigation.${item}.title`)}
							</a>
						</li>
					)
				})}
			</ul>

			<SocialIcons className={styles.socialIcons} />
		</div>
	)
}

export default MobileMenu
