'use client'

import { styled } from '@mui/material/styles';
import { Dialog, DialogContent, FormLabel, TextField } from '@mui/material';

export const SupportDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-paper': {
		borderRadius: '50px',
		background: 'var(--color-gray-light)',
		maxWidth: '1200px',
		width: '100%',
		'@media(max-width: 768px)': {
			maxWidth: '500px'
		}
	}
}))

export const SupportDialogContent = styled(DialogContent)(({ theme }) => ({
	color: 'rgb(255, 255, 255)',
	background: 'var(--color-gray-light)',
	borderRadius: '0',
	padding: '0',
	'@media(max-width: 768px)': {
		padding: '30px'
	}
}))

export const FormHeader = styled('div')(({ theme }) => ({
	padding: '50px 0 30px 0',
}))

export const Container = styled('div')(({ theme }) => ({
	maxWidth: '1090px',
	margin: '0 auto'
}))

export const FormElement = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	marginBottom: '40px'
}))

export const InputLabel = styled(FormLabel)(({ theme }) => ({
	// fontSize: '1.5rem',
	// lineHeight: '2rem',
	fontSize: '1.25rem',
	lineHeight: '1.5rem',
	fontWeight: 600,
	color: 'rgba(195, 182, 182, 1)',
	textTransform: 'uppercase',
	paddingLeft: '25px'
}))

export const Input = styled(TextField)(({ theme }) => ({
	'&.MuiTextField-root': {
		borderRadius: '20px',
	},
	'& .MuiInputBase-root': {
		borderRadius: '35px',

	},
	'.MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6',
		borderWidth: '2px',
	},
	'.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6',
	},
	'.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: '#C3B6B6',
	},
	'.MuiInputBase-input': {
		padding: '16px 25px',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		color: 'rgba(94, 94, 94, 1)',
	}
}))