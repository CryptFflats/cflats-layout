import { styled } from '@mui/material/styles';
import { ButtonBase } from '@mui/material';

export const SubmitButton = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'var(--font-open-sans)',
	fontSize: '1rem',
	lineHeight: '1.5rem',
	background: 'var(--color-gray)',
	padding: '10px 25px',
	borderRadius: '10px'
}))