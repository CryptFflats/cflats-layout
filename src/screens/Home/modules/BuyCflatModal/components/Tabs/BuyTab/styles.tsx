import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { BlueButton } from 'styled/BlueButton';

export const TabWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '15px',

	'@media(max-width: 768px)': {
		flexDirection: 'column'
	}
}));

export const CustomBlueBottom = styled(BlueButton)(() => ({
	'@media (max-width: 1980px)': {
		padding: '5px 26px',
		fontSize: '1.3rem',
		marginTop: '23px'
	}
}));
