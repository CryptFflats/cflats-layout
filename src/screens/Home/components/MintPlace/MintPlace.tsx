'use client'

import styles from './MintPlace.module.scss'
import { FC, ReactNode } from 'react'
import  IcClose from '../../../../assets/images/icons/ic_close.svg'
import { ButtonBase } from '@mui/material'
import VideoPlayer from '../../../../components/VideoPlayer/VideoPlayer';
import { CDN_URL } from '../../../../core/utils/constance';
import classNames from 'classnames';

interface MintPlaceProps {
	children?: ReactNode
	onClose: () => void
	open: boolean
}

const MintPlace: FC<MintPlaceProps> = ({ children, open, onClose }) => {
	//open && styles.visible
	return (
		<>
			{
				open && (
					<div className={classNames(styles.mintPlace, )}>
						<VideoPlayer>
							<source src={`${CDN_URL}/videos/keyBackgrpound.mp4`} />
						</VideoPlayer>

						<ButtonBase
							onClick={onClose}
							sx={{ position: 'absolute' }}
							className={styles.close}
						>
							<IcClose />
						</ButtonBase>
						<div className={styles.content}>{children}</div>
					</div>
				)
			}
		</>
	)
}

export default MintPlace
