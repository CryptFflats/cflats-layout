'use client'

import styles from './MintScreen.module.scss'
import AboutRooms from './AboutRooms'
import AboutNft from './AboutNft'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { CircularProgress } from '@mui/material';
import Loading from '../../../../app/[locale]/loading';


const MintScreen = () => {
	return (
		<section className={styles.mintScreen}>
			<AboutRooms />

			<AboutNft />
		</section>
	)
}

export default MintScreen
