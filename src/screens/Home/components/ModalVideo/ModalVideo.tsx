'use client'

import styles from './ModalVideo.module.scss'
import { Modal } from '@mui/material'
import {
	useAppDispatch,
	useAppSelector
} from '../../../../core/hooks/store.hook'
import { setTrailer } from '../../../../core/store/slices/ModalSlice'
import { CDN_URL } from '../../../../core/utils/constance';
import { useLocale } from 'use-intl';

const ModalVideo = () => {
	const { trailerModal } = useAppSelector(state => state.ModalSlice)
	const local = useLocale()
	const dispatch = useAppDispatch()

	return (
		<Modal open={trailerModal} onClose={() => dispatch(setTrailer(false))}>
			<video
				className={styles.video}
				src={`${CDN_URL}/videos/trailer_${local}`}
				autoPlay
				playsInline
				controls
			></video>
		</Modal>
	)
}

export default ModalVideo
