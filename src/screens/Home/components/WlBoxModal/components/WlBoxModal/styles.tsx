'use client';

import { styled } from '@mui/material/styles';
import {
	ButtonBase,
	Dialog,
	DialogContent,
	FormLabel,
	TextField
} from '@mui/material';

export const WlBoxDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-paper': {
		borderRadius: '30px',
		background: 'var(--color-gray-light)',
		maxWidth: '530px',
		fontSize: '1rem !important',

		'@media(max-width: 760px)': {
			padding: 0,
			margin: 0,
			maxHeight: '100vh !important',
			maxWidth: '100vw',
			height: '100vh',
			borderRadius: '0',
		}
	}
}));

export const WlBoxDialogContent = styled(DialogContent)(({ theme }) => ({
	color: 'rgb(255, 255, 255)',
	background: '#2c2c2c',
	borderRadius: '0',
	padding: '0',
	overflow: 'hidden',

	'@media(max-width: 760px)': {
		borderRadius: '0',
	}
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '20px',
	right: '20px',

	'@media(max-width: 480px)': {
		top: '43px',
		right: '20px'
	}
}));

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '40px 40px 10px 20px',

	'@media(max-width: 760px)': {
		padding: '35px 20px 10px 20px',
	}
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0 40px',
	

	'@media (max-width: 480px)': {
		padding: '0 15px'
	}
}));

export const Input = styled(TextField)(({ theme }) => ({
	'&.MuiTextField-root': {
		borderRadius: '20px',

		'@media (max-width: 760px)': {
			width: '100% !important',
		},
	},
	'& .MuiInputBase-root': {
		borderRadius: '35px',

		'@media (max-width: 760px)': {
			width: '100% !important',
		},
	},
	'.MuiOutlinedInput-notchedOutline': {
		border: '1px solid #B1A6A6',

		'@media (max-width: 760px)': {
			width: '100% !important',
		},
	},
	'.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #B1A6A6',
	},
	'.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #B1A6A6',
	},
	'.MuiInputBase-input': {
		padding: '7.5px 16px',
		fontSize: '14px',
		color: '#B1A6A6',

		'@media (max-width: 760px)': {
			maxWidth: '100% !important',
			textAlign: 'center',
		},
	}
}));

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	'@media (max-width: 760px)': {
		width: '100%',
	},
}));

export const InputLabel = styled(FormLabel)(({ theme }) => ({
	fontSize: '1.25rem',
	lineHeight: '1.5rem',
	fontWeight: 600,
	color: 'rgba(195, 182, 182, 1)',
	textTransform: 'uppercase',
	paddingLeft: '5px',

	
}));

export const FormElementWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	margin: '35px 0',
	gap: '40px',

	'@media (max-width: 760px)': {
		flexDirection: 'column',
		gap: '20px',
	},

	'@media (max-width: 480px)': {
		margin: '40px 20px'
	}
}));
