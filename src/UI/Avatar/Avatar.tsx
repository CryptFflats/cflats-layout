'use client'

import styles from './Avatar.module.scss'
import { useAppSelector } from '../../core/hooks/store.hook';
import CfImage from '../../components/CfImage/CfImage';
import { useState } from 'react';
import { Skeleton } from '@mui/material';

const Avatar = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const { avatar } = useAppSelector(state => state.MenuSlice)

  return (
    <span className={styles.avatar}>
			<CfImage
				onLoad={() => setIsLoading(false)}
				style={{ display: isLoading ? 'none' : '' }}
				src={avatar !== null ? avatar : ''}
				alt={'User Avatar'}
			/>
			{isLoading && (
				<Skeleton
					variant='circular'
					animation={'pulse'}
					width={'100%'}
					height={'100%'}
					sx={{ background: '#4d4949' }}
				/>
			)}
		</span>
  );
}

export default Avatar;