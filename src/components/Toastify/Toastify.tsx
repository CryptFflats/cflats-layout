'use client'

import styles from './Toastify.module.scss'
import Snackbar from '@mui/material/Snackbar';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import IcClose from '../../assets/images/icons/closeIcon.svg'
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
	return <Slide {...props} direction="right" />;
}

const Toastify = () => {
	const [isOpen, setIsOpen] = useState<boolean | null>(null);
	const t = useTranslations('Home');

	useEffect(() => {
		const cookie = Cookies.get('wl-alert');
		!cookie ? setIsOpen(true) : setIsOpen(false);
	}, []);

	const handleClose = () => {
		Cookies.set('wl-alert', 'true', { expires: 1 });
		setIsOpen(false);
	}

	return (
		<>
			{
				isOpen !== null && (
					<Snackbar
						open={isOpen}
						autoHideDuration={6000}
						TransitionComponent={TransitionRight}
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
					</Snackbar>
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
	right: '25px'
}))
