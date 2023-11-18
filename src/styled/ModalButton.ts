import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ModalButton = styled(Button)(({ theme }) => ({
	transition: '0.05s ease-in-out',
	padding: '7px 56px',
	fontSize: '14px',
	lineHeight: '21px',
	fontWeight: 700,
	display: 'inline-flex',
	alignItems: 'center',
	position: 'relative',
	background: '#0f6eb2',
	boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
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

	// '@media(max-width: 1920px)': {
	// 	padding: '8px 40px',
	// 	fontSize: '14px',
	// 	lineHeight: '19.34px'
	// },

	'@media(max-width: 760px)': {
		width: '100%',
	}
}));
