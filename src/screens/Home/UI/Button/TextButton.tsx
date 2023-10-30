import { Button, styled } from '@mui/material';

export const TextButton = styled(Button)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.25rem',
	fontWeight: 700,
	textDecoration: 'none',
	textTransform: 'uppercase',
	border: 'none',
	borderRadius: '50px',
	cursor: 'pointer',
	outline: 'none',
	color: '#2C2C2C',

	'&.Mui-disabled': {
		color: '#fff'
	},

	'&:hover': {
		background: 'none',
		textDecoration: 'underline',
	},

	// '@media(max-width: 1980px)': {
	// 	fontSize: '2rem',
	// 	lineHeight: '1.5rem'
	// },

	// '@media(max-width: 1768px)': {
	// 	fontSize: '1.2rem',
	// 	lineHeight: '2rem'
	// },

	// '@media(max-width: 1440px)': {
	// 	fontSize: '1.25rem',
	// 	lineHeight: '1.5rem'
	// },

	// '@media(max-width: 1024px)': {
	// 	fontSize: '1rem',
	// 	lineHeight: '1.5rem'
	// }
}));
