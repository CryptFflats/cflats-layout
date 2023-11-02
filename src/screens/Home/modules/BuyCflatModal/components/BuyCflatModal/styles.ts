'use client';

import { styled } from '@mui/material/styles';
import {
	ButtonBase,
	Dialog,
	DialogContent,
	FormLabel,
	TextField
} from '@mui/material';

export const BuyCflatDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-container': {
		'@media(max-width: 768px)': {
			display: 'block'
		}
	},

	'.MuiDialog-paper': {
		borderRadius: '50px',
		background: 'var(--color-gray-light)',
		maxWidth: '720px',
		'@media(max-width: 768px)': {
			width: '100vw',
			height: '100vh',
			maxWidth: '100vw',
			maxHeight: '100vh',
			margin: 0,
			borderRadius: 0
		}
	}
}));

export const BuyCflatDialogContent = styled(DialogContent)(({ theme }) => ({
	color: '#F4E9E9',
	background: 'var(--color-gray-light)',
	borderRadius: '0',
	padding: '0',
	'@media(max-width: 768px)': {
		overflow: 'hidden'
	}
}));

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '50px 70px 17px 55px',

	'@media(max-width: 768px)': {
		padding: '15px 20px',
		paddingTop: '40px',
		marginRight: '-20px'
	}
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0px 20px'
}));

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	marginBottom: '40px'
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '30px',
	right: '30px',

	'@media(max-width: 768px)': {
		position: 'static'
	}
}));
