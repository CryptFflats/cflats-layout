'use client'

import styles from './VideoPlayer.module.scss';
import { FC, ReactNode } from 'react';

interface VideoPlayerProps {
	children: ReactNode
}

const VideoPlayer: FC<VideoPlayerProps> = ({ children }) => {
	return (
		<div style={{ paddingTop: '75%' }} className={styles.videoWrapper}>
			<video
				className={styles.video}
				autoPlay
				muted
				playsInline
				loop
			>
				{children}
			</video>
		</div>
	);
};

export default VideoPlayer;