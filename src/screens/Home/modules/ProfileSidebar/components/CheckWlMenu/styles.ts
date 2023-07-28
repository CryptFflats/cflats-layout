"use client"

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StylesButton = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'start',
	borderRadius: '0px',
	width: '100%',
	transition: '0.4s',
	gap: '50px',
	padding: '20px 50px 20px 100px',
	color: '#fff',
	textDecoration: 'none',
	fontSize: '1.5rem',
	fontFamily: 'Open Sans, sans-serif',
	lineHeight: '1.7rem',
	fontWeight: 600,
	textTransform: 'none',
	'&:hover': {
		background: '#3D3D3D'
	},

	'> i': {
		fontSize: '35px',
		'@media(max-width: 576px)': {
			fontSize: '30px'
		}
	},
	'@media(max-width: 576px)': {
		padding: '20px 30px'
	}
}))