import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const BlueButton = styled(Button)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '2rem',
	lineHeight: '1.5rem',
	fontWeight: 700,
	display: 'inline-flex',
	gap: '20px',
	alignItems: 'center',
	position: 'relative',
	padding: '20px 50px',
	background: '#0f6eb2',
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
		background: '#0f6eb2'
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

export const BlueMint = styled(BlueButton)(({ theme }) => ({
	position: 'absolute',
	bottom: '10%',
	left: '50%',
	transform: 'translateX(-50%)',

	'@media(max-width: 1650px)': {
		bottom: "5%"
	},

	'@media(max-width: 1200px)': {
		bottom: "8%"
	},

	'@media(max-width: 768px)': {
		minWidth: '190px'
	}
}))

export const RoomsButton = styled(BlueButton)(({ theme }) => ({
	minWidth: '360px',
	'@media(max-width: 768px)': {
		minWidth: '250px'
	}
}))

export const WatchTrailer = styled(BlueButton)(({ theme }) => ({
	marginTop: '50px',
	'@media(max-width: 576px)': {
		marginTop: '30px'
	}
}))