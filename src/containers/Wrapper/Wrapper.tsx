'use client'

import styles from './Wrapper.module.scss'
import { FC, ReactNode, useEffect } from 'react';
import classNames from "classnames";
import { useAppDispatch } from '../../core/hooks/store.hook';
import { setAvatar } from '../../core/store/slices/MenuSlice';
import { userIconsData } from '../../core/data/userIcons.data';
import AOS from 'aos'

interface WrapperProps {
  children?: ReactNode
  background: 'gray' | 'white'
  lock?: boolean
}

const Wrapper: FC<WrapperProps> = ({ children, background, lock }) => {
	const dispatch = useAppDispatch()

	const getRandomIcon = (icons: string[]) => {
		return icons[Math.floor(Math.random() * icons.length)]
	}

	useEffect(() => {
		AOS.init({
			startEvent: 'load',
			once: true
		});
		//AOS.refresh();
	},[]);

	// useEffect(() => {
	// 	AOS.refresh(); // Assuming AOS is available in the scope
	// }, []);

	useEffect(() => {
		const handleLoad = () => {
			AOS.refresh(); // Предполагается, что AOS доступно в области видимости
		};

		window.addEventListener('load', handleLoad);

		return () => {
			window.removeEventListener('load', handleLoad);
		};
	}, []);


	useEffect(() => {
		const icon = getRandomIcon(userIconsData)
		dispatch(setAvatar(icon))
	}, [])

  return (
    <div className={classNames(
      styles.wrapper,
      background === 'gray' ? styles.gray : background === 'white' && styles.white,
      lock && styles.lock
    )}>
      {children}
    </div>
  );
}

export default Wrapper;