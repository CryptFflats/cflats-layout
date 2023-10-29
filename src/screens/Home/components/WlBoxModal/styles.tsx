'use client';

import { styled } from '@mui/material/styles';
import { ButtonBase, Dialog, DialogContent } from '@mui/material';

export const WlBoxDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-paper': {
		borderRadius: '50px',
		background: 'var(--color-gray-light)',
		maxWidth: '1200px',
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
	padding: '75px 0 30px 0'
}));

export const Container = styled('div')(({ theme }) => ({
	padding: '0 46px'
}));
