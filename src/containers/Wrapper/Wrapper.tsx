'use client'

import styles from './Wrapper.module.scss'
import { FC, ReactNode, useEffect } from 'react';
import classNames from "classnames";
import { useAppDispatch } from '../../core/hooks/store.hook';
import { setAvatar } from '../../core/store/slices/MenuSlice';
import { userIconsData } from '../../core/data/userIcons.data';
// import 'aos/dist/aos.css'
// import AOS from 'aos'

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