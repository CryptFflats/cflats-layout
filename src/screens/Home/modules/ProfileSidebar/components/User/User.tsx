'use client'

import styles from './User.module.scss'
import { Skeleton } from '@mui/material'
import Address from '../Address/Address'
import { useState } from 'react'
import CfImage from '../../../../../../components/CfImage/CfImage';
import { useAppSelector } from '../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import Avatar from '../../../../../../UI/Avatar/Avatar';

const User = () => {
	const [isLoading, setLoading] = useState<boolean>(true)
	const { avatar } = useAppSelector(state => state.MenuSlice)
	const t = useTranslations('Info')

	return (
		<div className={styles.user}>
			<div className={styles.userGroup}>
				<Avatar />
				<p>{t('profileSidebar.myWallet')}</p>
			</div>
			<Address />
		</div>
	)
}

export default User
