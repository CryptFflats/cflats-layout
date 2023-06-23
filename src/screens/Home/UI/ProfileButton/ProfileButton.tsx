'use client';

import styles from './ProfileButton.module.scss';
import Avatar from '../../../../UI/Avatar/Avatar';
import { useAccount } from 'wagmi';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { setProfileActive, setMenuActive } from 'core/store/slices/MenuSlice';
import { enableBodyScroll } from 'body-scroll-lock';

const ProfileButton = () => {
	const { isConnected } = useAccount();
	const { isProfileActive, isMenuActive } = useAppSelector(
		state => state.MenuSlice
	);
	const dispatch = useAppDispatch();

	const openProfile = (): void => {
		dispatch(setProfileActive(!isProfileActive));
		if (isMenuActive) {
			dispatch(setMenuActive(false));
			enableBodyScroll(document.body)
		}
	};


	return (
		<>
			{
				isConnected && (
					<button onClick={openProfile} title={'Open Profile'} className={styles.profileButton}>
						<Avatar />
					</button>
				)
			}
		</>
	);
};

export default ProfileButton;