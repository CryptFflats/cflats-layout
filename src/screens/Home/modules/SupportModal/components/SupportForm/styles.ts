import { styled } from '@mui/material/styles';

export const FormWrapper = styled('div')(({ theme }) => ({
	borderRadius: '50px',
	background: 'rgba(244, 233, 233, 1)',
	padding: '35px 0 50px 0'
}))

export const ErrorMessage = styled('div')(({ theme }) => ({
	padding: '0 0 0 25px',
	fontWeight: 600,
	fontSize: '1.125rem',
	color: 'var(--color-error)'
}))