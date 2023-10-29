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
		borderRadius: '50px',
		background: 'var(--color-gray-light)',
		maxWidth: '700px',
		width: '100%',
		'@media(max-width: 768px)': {
			maxWidth: '500px'
		}
	}
}));

export const WlBoxDialogContent = styled(DialogContent)(({ theme }) => ({
	color: 'rgb(255, 255, 255)',
	background: 'var(--color-gray-light)',
	borderRadius: '0',
	padding: '0',
	'@media(max-width: 768px)': {
		padding: '30px'
	}
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '30px',
	right: '30px'
}));

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '75px 0 30px 15px'
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0 46px'
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
