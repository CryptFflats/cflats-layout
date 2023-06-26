'use client';

import styles from './ModalVideo.module.scss';
import { ButtonBase, Modal, useMediaQuery } from '@mui/material';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../core/hooks/store.hook';
import { setTrailer } from '../../../../core/store/slices/ModalSlice';
import { CDN_URL } from '../../../../core/utils/constance';
import { useLocale } from 'use-intl';
import IcClose from '../../../../assets/images/icons/closeIcon.svg'
import { styled } from '@mui/material/styles';

const ModalVideo = () => {
	const matches = useMediaQuery('(max-width:900px)');
	const { trailerModal } = useAppSelector(state => state.ModalSlice);
	const local = useLocale();
	const dispatch = useAppDispatch();

	const handleClose = () => dispatch(setTrailer(false));

	return (
		<Modal open={trailerModal} onClose={handleClose}>
			{
				matches ? (
						<div className={styles.mobWrapper}>
							<CloseButton onClick={handleClose}>
								<IcClose />
							</CloseButton>
						<video
							className={styles.mobVideo}
							src={`${CDN_URL}/videos/trailer_mob_${local}.mp4`}
							autoPlay
							playsInline
							controls
						></video>
						</div>
					)
					: (

							<video
								className={styles.video}
								src={`${CDN_URL}/videos/trailer_${local}.mp4`}
								autoPlay
								playsInline
								controls
							></video>

					)
			}
		</Modal>
	);
};

export default ModalVideo;

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	color: '#fff',
	padding: '5px',
	borderRadius: '50%',
	position: 'absolute',
	top: '25px',
	right: '25px',
	zIndex: 20
}))
