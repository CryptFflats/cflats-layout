'use client'

import styles from './MintScreen.module.scss'
import AboutRooms from './AboutRooms'
import AboutNft from './AboutNft'


const MintScreen = () => {
	return (
		<section className={styles.mintScreen}>
			<AboutRooms />

			<AboutNft />
		</section>
	)
}

export default MintScreen
