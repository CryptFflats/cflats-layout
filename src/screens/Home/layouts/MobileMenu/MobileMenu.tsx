'use client';

import styles from './MobileMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setMenuActive } from '../../../../core/store/slices/MenuSlice';
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons';
import { SwipeableDrawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageChanger from './LanguageChanger';

interface NavLink {
	path: string;
	title: string;
}

const MobileMenu = () => {
	const { isMenuActive } = useAppSelector(state => state.MenuSlice);
	const { height } = useAppSelector(state => state.NavbarSlice);
	const dispatch = useAppDispatch();
	const t = useTranslations('Home');
	const navigationLinks = ['about', 'roadmap', 'team', 'faq', 'litepaper', 'dapp'];


	return (
		<Menu
			anchor={'left'}
			open={isMenuActive}
			onClose={() => dispatch(setMenuActive(false))}
			onOpen={() => dispatch(setMenuActive(true))}
		>
			<div style={{ paddingTop: height }}>
				<div className={styles.content}>
					<ul className={styles.navList}>
						{navigationLinks.map((item, index) => {
							return (
								<li key={index}>
									<a onClick={() => dispatch(setMenuActive(false))} href={t(`navigation.${item}.path`)}>
										{t(`navigation.${item}.title`)}
									</a>
								</li>
							);
						})}
					</ul>

					<SocialIcons className={styles.socialIcons} />

					<LanguageChanger />
				</div>
			</div>
		</Menu>
	);
};

export default MobileMenu;

const Menu = styled(SwipeableDrawer)(({ theme }) => ({
	'&.MuiDrawer-root': {
		zIndex: 10
	},
	'& .MuiDrawer-paper': {
		width: '100vw',
		height: '100vh',
		background: 'rgba(35, 35, 35, 0.95)'
	}
}));