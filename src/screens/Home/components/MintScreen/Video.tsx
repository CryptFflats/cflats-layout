'use client'

import styles from './MintScreen.module.scss'
import { CDN_URL } from '../../../../core/utils/constance';

const Video = () => {
	return (
		<div style={{ paddingTop: '75%' }} className={styles.videoWrapper}>
			<video
				//onLoad={handleOnLoadedData}
				id={'video'}
				className={styles.video}
				autoPlay
				muted
				playsInline
				loop
			>
				{/*<source src={`${CDN_URL}/appart-buid.webm`} />*/}
				<source src={`${CDN_URL}/videos/appart-build.mp4`} type="video/mp4" />
			</video>
		</div>
	);
};

export default Video;