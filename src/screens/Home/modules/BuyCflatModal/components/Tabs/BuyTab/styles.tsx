import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { BlueButton } from 'styled/BlueButton';
import { ModalButton } from 'styled/ModalButton';

export const TabWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '15px',

	'@media(max-width: 768px)': {
		flexDirection: 'column'
	}
}));

export const CustomBlueBottom = styled(ModalButton)(() => ({
	marginTop: '20px',
}));
