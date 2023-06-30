'use client'

import styles from './Toastify.module.scss'
import Snackbar from '@mui/material/Snackbar';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import IcClose from '../../assets/images/icons/closeIcon.svg'
import { ButtonBase, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
	return <Slide {...props} direction="right" />;
}

function TransitionUp(props: TransitionProps) {
	return <Slide {...props} direction="up" />;
}

const Toastify = () => {
	const [isOpen, setIsOpen] = useState<boolean | null>(null);
	const query = useMediaQuery('(max-width: 768px)')
	const t = useTranslations('Home');

	useEffect(() => {
		const cookie = Cookies.get('wl-alert');
		!cookie ? setIsOpen(true) : setIsOpen(false);
	}, []);

	const handleClose = () => {
		const expires = new Date(Date.now() + 3600000);
		Cookies.set('wl-alert', 'true', { expires });
		setIsOpen(false);
	}

	return (
		<>
			{
				isOpen !== null && (
					<CustomSnackbar
						open={isOpen}
						autoHideDuration={6000}
						TransitionComponent={query ? TransitionUp : TransitionRight}
					>
						<div className={styles.toastify}>
							<CloseButton onClick={handleClose}>
								<IcClose/>
							</CloseButton>
							<div className={styles.content}>
								{t.rich('mint.alert', {
									span: (chunks) => <span>{chunks}</span>,
									strong: (chunks) => <strong>{chunks}</strong>
								})}
							</div>
						</div>
					</CustomSnackbar>
				)
			}
		</>
	);
};

export default Toastify;

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	color: '#fff',
	padding: '5px',
	borderRadius: '50%',
	position: 'absolute',
	top: '25px',
	right: '25px',
	'@media(max-width: 768px)': {
		top: '15px',
		right: '15px',
	}
}))

export const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
	'&.MuiSnackbar-root': {
		'@media(max-width: 768px)': {
			bottom: 0,
			right: 0,
			left: 0
		}
	}
}))

