'use client'

import { useState } from 'react'
import styles from './Layout.module.scss'
import { Link } from 'react-scroll'
import classNames from 'classnames'
import Introduction from './sections/Introduction'
import Concept from './sections/Concept'
import Collection from './sections/Collection'
import Rarity from './sections/Rarity'
import TokenProject from './sections/TokenProject'
import Dapp from './sections/Dapp'
import Gen0 from './sections/Gen0'
import Gen1 from './sections/Gen1'
import Meta from './sections/Meta'
import Contracts from './sections/Contracts'
import ScrollButton from '../../UI/ScrollButton/ScrollButton'
import { useTranslations } from 'next-intl';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Lands from './sections/Lands';

const Layout = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const t = useTranslations('Litepaper')
	const navigationData = ["INTRODUCTION", "CONCEPT", "ABOUT", "RARITY", "GEN#0", "GEN#1", "LANDS", "PROJECT_TOKEN", "dAPP", "GAME", "CONTRACTS"]

	const openMenu = () => {
		setIsMenuActive(!isMenuActive);
		isMenuActive ? enableBodyScroll(document.body) : disableBodyScroll(document.body);
	}

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className={styles.layout}>
			<aside className={classNames(styles['layout-navbar'], 'triggers')}>
				<ul className={styles['main-menu']}>
					{navigationData.map((link, index) => {
						return (
							<li key={index}>
								<Link
									activeClass={styles.active}
									offset={-200}
									smooth
									spy
									to={t(`navigation.menu.${link}.path`)}
								>
									{t(`navigation.menu.${link}.title`)}
								</Link>
							</li>
						)
					})}
				</ul>

				<p className={styles['tb-txt']}>Table of Contents</p>

				<div
					className={classNames(styles.burger, isMenuActive && styles.active)}
					onClick={openMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className={styles['navbar-links']}>
					<button onClick={goToTop} className={styles['toUp']}>
						{t('navigation.goUp')}
					</button>
				</div>
			</aside>

			<div
				className={classNames(
					styles['mobile-menu'],
					isMenuActive && styles.active
				)}
			>
				<ul>
					{navigationData.map((link, index) => {
						return (
							<li key={index}>
								<Link
									activeClass={styles.active}
									offset={-200}
									smooth
									spy
									to={t(`navigation.menu.${link}.path`)}
									onClick={openMenu}
								>
									{t(`navigation.menu.${link}.title`)}
								</Link>
							</li>
						)
					})}
				</ul>
				<a href='/' className={styles['backTo-main']}>
					{t('navigation.return_to_site')}
				</a>
			</div>

			<main className={styles['layout-main']}>
				<h1>CRYPTOFLATS LITEPAPER</h1>

				<div className={styles['main-sections']}>
					<Introduction />
					<Concept />
					<Collection />
					<Rarity />
					<Gen0 />
					<Gen1 />
					<Lands />
					<TokenProject />
					<Dapp />
					<Meta />
					<Contracts />

					<p className={classNames(styles['litepaper-copyright'])}>
						Cryptoflats Litepaper 2023 © {t('litepaper_copyright')}
					</p>
				</div>

				<ScrollButton />
			</main>
		</div>
	)
}

export default Layout
