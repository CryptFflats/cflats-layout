'use client';

import { styled } from '@mui/material/styles';
import {
	ButtonBase,
	Dialog,
	DialogContent,
	FormLabel,
	TextField
} from '@mui/material';

export const SupportDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-container': {
		'@media(max-width: 768px)': {
			display: 'block'
		}
	},

	'.MuiDialog-paper': {
		borderRadius: '30px',
		background: 'var(--color-gray-light)',
		maxWidth: '720px',
		width: '100%',

		'@media(max-width: 768px)': {
			width: '100vw',
			height: '100vh',
			maxWidth: '100vw',
			maxHeight: '100vh',
			margin: 0,
			borderRadius: 0,
		}
	}
}));

export const SupportDialogContent = styled(DialogContent)(({ theme }) => ({
	color: 'rgb(255, 255, 255)',
	background: 'var(--color-gray-light)',
	borderRadius: '0',
	padding: '0'
}));

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '40px 15px 17px 25px',
	background: '#2C2C2C',
	'@media (max-width: 768px)': {
		padding: '35px 0 15px 30px'
	}
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0 46px',

	'@media (max-width: 768px)': {
		padding: '0 15px'
	}
}));

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	marginBottom: '24px',

	'@media (max-width: 768px)': {
		marginBottom: '30px'
	}
}));

export const InputLabelWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const InputLabel = styled(FormLabel)(({ theme }) => ({
	// fontSize: '1.5rem',
	// lineHeight: '2rem',
	fontFamily: 'Open Sans, sans-serif',
	fontSize: '14px',
	lineHeight: 'normal',
	fontWeight: 600,
	color: '#767272',
	textTransform: 'uppercase',
	paddingLeft: '25px',

	'@media (max-width: 768px)': {
		fontSize: '17px'
	}
}));

export const Input = styled(TextField)(({ theme }) => ({
	'&.MuiTextField-root': {
		borderRadius: '20px'
	},
	'& .MuiInputBase-root': {
		borderRadius: '22px'
	},
	'.MuiOutlinedInput-notchedOutline': {
		borderColor: '#767272',
		borderWidth: 1,
	},
	'.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: '#767272',
		borderWidth: 1,
	},
	'.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: '#767272',
		borderWidth: 1,
	},
	'.MuiInputBase-input': {
		padding: '10px 25px',
		fontSize: '14px',
		lineHeight: 'normal',
		color: 'rgba(94, 94, 94, 1)',
		fontFamily: 'Open Sans, sans-serif',

		'@media (max-width: 768px)': {
			fontSize: '17px'
		},

		textarea: {
			padding: '0',
			minHeight: '360px'
		}
	}
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '30px',
	right: '30px',

	'@media (max-width: 768px)': {
		position: 'static'
	}
}));
