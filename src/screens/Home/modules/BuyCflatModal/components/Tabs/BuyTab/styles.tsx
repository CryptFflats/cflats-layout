import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BuyTabWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',

	'@media(max-width: 768px)': {
		flexDirection: 'column',
		gap: '12px'
	}
}));
