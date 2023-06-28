'use client'

import styles from './MintScreen.module.scss'
import classNames from 'classnames'
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../core/hooks/store.hook'
import { setTrailer } from '../../../../core/store/slices/ModalSlice'
import { useTranslations } from 'next-intl';
import { WatchTrailer } from '../../../../styled/BlueButton';
import { CDN_URL } from '../../../../core/utils/constance';
import { CircularProgress } from '@mui/material';

const AboutRooms = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const dispatch = useAppDispatch()
	const t = useTranslations('Home')
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleOnLoadedData = () => {
		setIsLoading(false)
		console.log('Video loaded')
	}

	return (
			<div className={styles.aboutRooms}>
				<div style={{ paddingTop: '75%' }} className={styles.videoWrapper}>
					<video
						//onLoad={handleOnLoadedData}
						id={'video'}
						className={styles.video}
						autoPlay
						muted
						playsInline
						loop
						preload={'metadata'}
						ref={videoRef}
					>
						<source src={`${CDN_URL}/videos/appart-buid.webm`} />
						<source src={`${CDN_URL}/videos/appart-build.mp4`} type="video/mp4" />
					</video>
				</div>

				<div className={classNames(styles.aboutRoomsText)}>
					<h1>{t('cryptoflats_video.play_game')}</h1>
					<p>{t('cryptoflats_video.coming_soon')}</p>

					<WatchTrailer
						onClick={() => dispatch(setTrailer(true))}
					>
						{t('cryptoflats_video.watch_trailer')}
					</WatchTrailer>

					<ul className={styles.hashtags}>
						<li className={classNames(styles.hashtag, styles['hashtag-1'])}>
							#p2e
						</li>
						<li className={classNames(styles.hashtag, styles['hashtag-2'])}>
							#binancechain
						</li>
						<li className={classNames(styles.hashtag, styles['hashtag-3'])}>
							#binancenft
						</li>
						<li className={classNames(styles.hashtag, styles['hashtag-4'])}>
							#defi
						</li>
						<li className={classNames(styles.hashtag, styles['hashtag-5'])}>
							#bnb
						</li>
					</ul>
				</div>
				{/*{isLoading && (*/}
				{/*	<div className={styles.loadVideoScreen}>*/}
				{/*		<div>*/}
				{/*			<CircularProgress color='inherit' />*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*)}*/}

			</div>
	)
}

export default AboutRooms
