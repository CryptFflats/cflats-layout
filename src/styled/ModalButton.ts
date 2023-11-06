import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ModalButton = styled(Button)(({ theme }) => ({
	transition: '0.05s ease-in-out',
	fontFamily: 'var(--font-nunito)',
	padding: '9px 58px',
	fontSize: '18px',
	lineHeight: '25.78px',
	fontWeight: 700,
	display: 'inline-flex',
	gap: '20px',
	alignItems: 'center',
	position: 'relative',
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
		background: '#08426d'
	},

	'@media(max-width: 1920px)': {
		padding: '8px 44px',
		fontSize: '14px',
		lineHeight: '19.34px'
	},

	'@media(max-width: 576px)': {
		padding: '8px 15px',
		fontSize: '10px'
	}
}));
