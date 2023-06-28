'use client'

import styles from './Navbar.module.scss'
import dynamic from 'next/dynamic'
import Logo from '../../UI/Logo/Logo'
import Navigation from './Navigation'
import SocialIcons from '../../../../UI/SocialIcons/SocialIcons'
import Burger from './Burger'
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../../core/hooks/store.hook';
import { setHeight } from '../../../../core/store/slices/NavbarSlice';
const ProfileButton = dynamic(() => import("../../UI/ProfileButton/ProfileButton"), {
	ssr: false,
});
const WalletButton = dynamic(() => import("../../UI/WalletButton/WalletButton"), {
	ssr: false,
});

const Navbar = () => {
	const ref = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const element = ref.current; // Получаем DOM-элемент из ссылки useRef

		const handleResize = () => {
			if (element) {
				const height = element.offsetHeight; // Измеряем высоту элемента
				dispatch(setHeight(height))
				console.log('Height:', height);
			}
		};

		handleResize(); // Вызываем функцию handleResize при монтировании компонента для получения начальной высоты

		window.addEventListener('resize', handleResize); // Добавляем обработчик события изменения размера окна

		return () => {
			window.removeEventListener('resize', handleResize); // Удаляем обработчик события при размонтировании компонента
		};
	}, []);

	return (
		<nav ref={ref} className={styles.navbar}>
			<div className={styles.container}>
				<Logo />

				<div className={styles.group}>
					<Navigation />
					<SocialIcons className={styles.socialIcons} />

					<WalletButton />
					<ProfileButton />

					<Burger />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
