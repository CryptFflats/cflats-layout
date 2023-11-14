import { styled } from '@mui/material/styles';

export const FormWrapper = styled('div')(({ theme }) => ({
	borderRadius: '30px',
	background: 'rgba(244, 233, 233, 1)',
	padding: '25px 0 50px 0',
	'@media(max-width: 768px)': {
		borderRadius: '0',
		height: '100%'
	}
}));

export const ErrorMessage = styled('div')(({ theme }) => ({
	padding: '0 0 0 25px',
	fontWeight: 600,
	fontSize: '1.125rem',
	color: 'var(--color-error)'
}));

export const CenterBtnWrapper = styled('div')(() => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center'
}));
