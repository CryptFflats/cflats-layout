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
		maxWidth: '700px',
		width: '100%',
		'@media(max-width: 1920px)': {
			maxWidth: '500px'
		}
	}
}));

export const WlBoxDialogContent = styled(DialogContent)(({ theme }) => ({
	color: 'rgb(255, 255, 255)',
	background: '#2c2c2c',
	borderRadius: '0',
	padding: '0'
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '30px',
	right: '30px',

	'@media(max-width: 480px)': {
		top: '10px',
		right: '20px'
	}
}));

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '50px 0 15px 0',
	paddingRight: '30px',
	paddingLeft: '30px',

	'@media (max-width: 480px)': {
		padding: '30px 0 10px 20px'
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
		padding: '8px 16px',
		fontSize: '18px',
		fontWeight: '600',
		color: 'rgba(94, 94, 94, 1)',

		'@media (max-width: 1920px)': {
			fontSize: '14px'
		},

		'@media (max-width: 480px)': {
			fontSize: '12px'
		}
	}
}));

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	flex: 1
}));

export const InputLabel = styled(FormLabel)(({ theme }) => ({
	fontSize: '1.25rem',
	lineHeight: '1.5rem',
	fontWeight: 600,
	color: 'rgba(195, 182, 182, 1)',
	textTransform: 'uppercase',
	paddingLeft: '5px'
}));

export const FormElementWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	margin: '40px 0',
	gap: '20px',

	'@media (max-width: 480px)': {
		margin: '20px 0'
	}
}));
