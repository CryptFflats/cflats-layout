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
	// padding: '20px 22px 33px 55px',

	'@media(max-width: 768px)': {
		padding: '15px 0',
		paddingTop: '40px',
		marginRight: '-20px'
	}
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0 20px'
}));

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	marginBottom: '40px'
}));

export const InputLabel = styled(FormLabel)(({ theme }) => ({
	// fontSize: '1.5rem',
	// lineHeight: '2rem',
	fontSize: '1.25rem',
	lineHeight: '1.5rem',
	fontWeight: 600,
	color: 'rgba(195, 182, 182, 1)',
	textTransform: 'uppercase',
	paddingLeft: '25px'
}));

export const Input = styled(TextField)(({ theme }) => ({
	'&.MuiTextField-root': {
		borderRadius: '20px'
	},
	'& .MuiInputBase-root': {
		borderRadius: '35px'
	},
	'.MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6',
		borderWidth: '2px'
	},
	'.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6'
	},
	'.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6'
	},
	'.MuiInputBase-input': {
		padding: '16px 25px',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		color: 'rgba(94, 94, 94, 1)'
	}
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '30px',
	right: '30px',

	'@media(max-width: 768px)': {
		position: 'static'
	}
}));
