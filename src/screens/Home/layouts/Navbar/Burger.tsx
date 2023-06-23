'use client'

import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import {
	useAppDispatch,
	useAppSelector
} from '../../../../core/hooks/store.hook'
import {
	setMenuActive,
	setWalletActive,
	setProfileActive
} from '../../../../core/store/slices/MenuSlice'
import { enableBodyScroll,
disableBodyScroll} from 'body-scroll-lock';

const Burger = () => {
	const dispatch = useAppDispatch()
	const { isMenuActive } = useAppSelector(state => state.MenuSlice)

	const openMenu = () => {
		dispatch(setMenuActive(!isMenuActive))
		dispatch(setWalletActive(false))
		dispatch(setProfileActive(false))
		isMenuActive ? enableBodyScroll(document.body) : disableBodyScroll(document.body)
	}

	return (
		<div
			className={classNames(styles.burger, isMenuActive && styles.active)}
			onClick={openMenu}
			role={'button'}
			tabIndex={0}
			id={'burger'}
			aria-expanded={isMenuActive}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Burger
