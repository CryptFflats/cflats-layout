import { Box, styled } from '@mui/material';

export const SwapSectionWrapper = styled(Box)(({ theme }) => ({
	borderRadius: '25px',
	background: '#F4E9E9',
	padding: '15px 30px',
	width: '100%'
}));

export const SwapSectionRow = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}));

export const SwapSectionTitle = styled('span')(({ theme }) => ({
	color: '#5E5E5E',
	fontSize: '17px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal'
}));

export const MaxLabel = styled(SwapSectionTitle)(({ theme }) => ({
	color: '#C3B6B6'
}));

export const SwapSectionAmount = styled('span')(({ theme }) => ({
	color: '#C3B6B6',
	fontSize: '40px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal'
}));
