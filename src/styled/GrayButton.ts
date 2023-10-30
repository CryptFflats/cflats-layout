import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const GrayButton = styled(Button)(({ theme }) => ({
	transition: '0.05s ease-in-out',
	fontFamily: 'var(--font-nunito)',
	padding: '25px 60px',
	fontSize: '2.25rem',
	lineHeight: '2.5rem',
	fontWeight: 700,
	display: 'inline-flex',
	gap: '20px',
	alignItems: 'center',
	position: 'relative',
	background: 'rgba(51, 51, 51, 1)',
	boxShadow: '3px 6px 6px rgb(0 0 0 / 15%)',
	borderRadius: '50px',
	textDecoration: 'none',
	color: '#FFF',
	textAlign: 'center',
	textTransform: 'uppercase',
	border: 'none',
	cursor: 'pointer',
	outline: 'none',

	'&.Mui-disabled': {
		color: '#fff'
	},

	'&:hover': {
		background: '#adadad',
		color: 'rgba(51, 51, 51, 1)',
	},

	'@media(max-width: 1980px)': {
		padding: '20px 50px',
		fontSize: '2rem',
		lineHeight: '1.5rem',
	},

	'@media(max-width: 1768px)': {
		padding: '15px 35px',
		fontSize: "1.75rem",
		lineHeight: "2rem"
	},

	'@media(max-width: 1440px)': {
		padding: '15px 35px',
		fontSize: "1.25rem",
		lineHeight: "1.5rem"
	},

	'@media(max-width: 1024px)': {
		padding: '10px 30px',
		fontSize: "1rem",
		lineHeight: "1.5rem"
	}
}))

export const RoomsGrayButton = styled(GrayButton)(({ theme }) => ({
	minWidth: '410px',
	'@media(max-width: 1980px)': {
		minWidth: '360px'
	},
	'@media(max-width: 768px)': {
		minWidth: '250px'
	}
}))