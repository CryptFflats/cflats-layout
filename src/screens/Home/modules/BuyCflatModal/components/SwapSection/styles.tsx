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
	position: 'relative',
	alignItems: 'start',

	'&:nth-child(2)': {
		height: '120px',

		'@media(max-width: 768px)': {
			height: 'auto'
		}
	},

	'@media(max-width: 768px)': {
		alignItems: 'center'
	}
}));

export const SwapSectionTitle = styled('span')(({ theme }) => ({
	color: '#5E5E5E',
	fontSize: '17px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal'
}));

export const MaxLabel = styled(SwapSectionTitle)(({ theme }) => ({
	color: '#C3B6B6',
	'&:hover': {
		cursor: 'pointer'
	}
}));

export const SwapSectionAmountWrapper = styled('div')(({ theme }) => ({
	alignSelf: 'flex-start'
}));

export const SwapSectionAmount = styled('input')(({ theme }) => ({
	color: '#757575',
	fontSize: '40px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal',
	border: 'none',
	background: '#F4E9E9',
	outline: 'none',
	width: '100%',

	'&:active': {
		border: 'none'
	},

	'::-webkit-input-placeholder': {
		/* WebKit, Blink, Edge */ color: '#C3B6B6'
	},
	':-moz-placeholder': {
		/* Mozilla Firefox 4 to 18 */ color: '#C3B6B6',
		opacity: 1
	},
	'::-moz-placeholder': {
		/* Mozilla Firefox 19+ */ color: '#C3B6B6',
		opacity: 1
	},
	':-ms-input-placeholder': {
		/* Internet Explorer 10-11 */ color: '#C3B6B6'
	},
	'::-ms-input-placeholder': {
		/* Microsoft Edge */ color: '#C3B6B6'
	},
	'::placeholder': {
		color: '#C3B6B6'
	}
}));

export const ComponentHolder = styled('div')(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	right: 0,

	'@media(max-width: 768px)': {
		position: 'static'
	}
}));
