import { styled } from '@mui/material/styles';

export const FormWrapper = styled('div')(({ theme }) => ({
	borderRadius: '50px',
	background: 'rgba(244, 233, 233, 1)',
	padding: '30px 0 35px 0',

	'@media (max-width: 768px)': {
		borderRadius: 0,
		height: '100%',
	},
}))

export const ErrorMessage = styled('span')(({ theme }) => ({
	fontSize: '14px',
	color: 'var(--color-error)',
	lineHeight: '10px',
}))