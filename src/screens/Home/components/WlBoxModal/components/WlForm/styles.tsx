import { styled } from '@mui/material/styles';

export const FormWrapper = styled('div')(({ theme }) => ({
	borderRadius: '30px',
	background: 'rgba(244, 233, 233, 1)',
	padding: '35px 0 50px 0',

	'@media (max-width: 480px)': {
		padding: '20px 0 30px 0'
	}
}));

export const ErrorMessage = styled('div')(({ theme }) => ({
	paddingLeft: '6px',
	fontWeight: 600,
	fontSize: '10px',
	color: 'var(--color-error)',

	'@media (max-width: 480px)': {
		fontSize: '7px',
		lineHeight: '15px'
	}
}));
