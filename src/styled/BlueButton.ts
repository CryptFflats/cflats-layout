import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const BlueButton = styled(Button)(({ theme }) => ({
	fontFamily: 'Nunito, sans-serif;',
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
		fontSize: "1.75rem",
		lineHeight: "2rem"
	}
}))