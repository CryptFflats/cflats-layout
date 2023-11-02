"use client"

import styles from './MenuList.module.scss'
import EnterDapp from '../ProfileSidevar/Buttons/EnterDapp'
import BuyCflat from '../ProfileSidevar/Buttons/BuyCflat'
import NftCollection from '../ProfileSidevar/Buttons/NftCollection'
import ChangeLanguage from '../ProfileSidevar/Buttons/ChangeLanguage'
import Support from '../ProfileSidevar/Buttons/Support'
import LogOut from '../ProfileSidevar/Buttons/LogOut'
import CheckWl from '../ProfileSidevar/Buttons/CheckWl';

const menuData = [
	<EnterDapp />,
	<BuyCflat />,
	// <CheckWl />,
	<Support />,
	<LogOut />
]

const MenuList = () => {
	return (
		<ul className={styles.menuList}>
			{menuData.map((item, key) => {
				return <li key={`profile-sidebar-button_${key}`}>{item}</li>
			})}
		</ul>
	)
}

export default MenuList
