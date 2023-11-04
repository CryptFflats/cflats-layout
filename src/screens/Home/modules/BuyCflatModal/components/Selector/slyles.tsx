import { Box, InputBase, MenuItem, Select, styled } from '@mui/material';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		display: 'flex',
		borderRadius: 50,
		alignItems: 'center',
		minWidth: '100px',
		backgroundColor: '#EADEDE',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		padding: 2,
		'&:focus': {
			border: 'none',
			borderRadius: 50
		}
	}
}));

export const OptionText = styled('span')(() => ({
	color: '#5E5E5E',
	fontSize: '17px',
	fontWeight: 600,
	marginLeft: '5px'
}));

export const Option = styled(MenuItem)(() => ({
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#EADEDE',
	borderRadius: 50,
	padding: '5px',
	minHeight: '28px',
	marginTop: 4,
}));

export const CustomSelect = styled(Select<string>)(() => ({
	root: {
		backgroundColor: 'blue',
	},
	'.MuiPaper-root': {
		backgroundColor: 'red'
	},
	'MuiButtonBase-root': {
		backgroundColor: 'green'
	}
}));

export const TokenImageWrapper = styled('div')(() => ({
	display: 'inline-block',
	width: '24px',
	height: '24px'
}));
