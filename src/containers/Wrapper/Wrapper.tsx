'use client'

import styles from './Wrapper.module.scss'
import { FC, ReactNode, useEffect, useState } from 'react';
import classNames from "classnames";
import { useAppDispatch } from '../../core/hooks/store.hook';
import { setAvatar } from '../../core/store/slices/MenuSlice';
import { userIconsData } from '../../core/data/userIcons.data';
import WhiteListService from '../../core/services/WhiteListService/WhiteList.service';
import CryptoflatsNFT from '../../core/utils/contract/CryptoflatsNFT';
import { useAccount } from 'wagmi';
import AuthService from '../../core/services/AuthService/Auth.service';
import { setIsAdmin, setUser } from '../../core/store/slices/UserSlice';
import Cookies from 'js-cookie';

interface WrapperProps {
  children?: ReactNode
  background: 'gray' | 'white'
  lock?: boolean
}

const Wrapper: FC<WrapperProps> = ({ children, background, lock }) => {
	const dispatch = useAppDispatch()
	//const [isLoading, setIsLoading] = useState<boolean>(true)

	const getRandomIcon = (icons: string[]) => {
		return icons[Math.floor(Math.random() * icons.length)]
	}

	// const getAddresses = async () => {
	// 	const freeList = await WhiteListService.getGenZeroFree();
	// 	const discountList = await WhiteListService.getGenZeroDiscount();
	//
	// 	return { freeList, discountList }
	// }



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
      {/*{*/}
			{/*	isLoading ? (<Preload/>) : children*/}
			{/*}*/}
			{children}
    </div>
  );
}

export default Wrapper;