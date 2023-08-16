import styles from './ProfileSidebar.module.scss'
//import ClickAwayListener from '@mui/base/ClickAwayListener'
import User from '../User/User'
import MenuList from '../MenuList/MenuList'
import { useAppSelector } from '../../../../../../core/hooks/store.hook';
// import { setProfileActive } from '../../../../../../core/store/slices/MenuSlice';
import { useAccount } from 'wagmi';
import CheckWlMenu from '../CheckWlMenu/CheckWlMenu';

const ProfileSidebar = () => {
	const { menu } = useAppSelector(state => state.ProfileSidebarSlice)
	const { height } = useAppSelector(state => state.NavbarSlice)
	const { isConnected } = useAccount()
	const { isProfileActive } = useAppSelector(
		state => state.MenuSlice
	)

	return (
		<>
			{
				isConnected && isProfileActive && (
					// <ClickAwayListener
					// 	touchEvent={false}
					// 	onClickAway={() => dispatch(setProfileActive(false))}
					// ></ClickAwayListener>
						<div style={{ position: 'absolute', zIndex: '20', right: 0, top: height }} className={styles.profileSidebar}>
							<User />
							{menu === 'menu' && <MenuList />}
							{menu === 'wl' && <CheckWlMenu/>}
							{/*{menu === 'lang' && <LanguageMenu />}*/}
						</div>

				)
			}
		</>
	)
}

export default ProfileSidebar
