import { styled } from '@mui/material/styles'
import {
	ButtonBase,
	Dialog,
	DialogContent,
	DialogContentText
} from '@mui/material'
import React from 'react'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'

export const CustomDialog = styled(Dialog)(({ theme }) => ({
	'.MuiDialog-paper': {
		borderRadius: '0',
		background: 'var(--color-gray-light)',
		maxWidth: '800px',
		'@media(max-width: 768px)': {
			maxWidth: '500px'
		}
	}
}))

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
	background: 'var(--color-gray-light)',
	borderRadius: '0',
	padding: '50px 95px',
	'@media(max-width: 768px)': {
		padding: '30px'
	}
}))

export const CustomDialogContentText = styled(DialogContentText)(
	({ theme }) => ({
		fontFamily: 'Open Sans, sans-serif',
		fontSize: '1.5rem',
		lineHeight: '2rem',
		fontWeight: 500,
		color: '#fff',
		textAlign: 'center',
		'>span': {
			color: 'var(--color-yellow)',
			fontWeight: 700
		},
		'@media(max-width: 768px)': {
			fontSize: '1rem',
			lineHeight: '1.5rem'
		},
		'>a': {
			color: 'var(--color-yellow)',
			fontWeight: 700,
			textDecorationLine: 'underline',
			textUnderlineOffset: '7px'
		}
	})
)

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	color: '#fff',
	padding: '5px',
	borderRadius: '50%',
	position: 'absolute',
	top: '30px',
	right: '30px'
}))
