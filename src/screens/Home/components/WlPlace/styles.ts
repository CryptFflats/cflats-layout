import { styled } from '@mui/material/styles';
import { ButtonBase } from '@mui/material';

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
	position: 'absolute',
	top: '20px',
	right: '20px',
	zIndex: 20,
	color: '#fff'
}))