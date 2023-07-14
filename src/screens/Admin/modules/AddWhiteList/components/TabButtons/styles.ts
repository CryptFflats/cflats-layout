import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';

export const WlTabs = styled(Tabs)(({ theme }) => ({
	'.MuiTabs-indicator': {
		display: 'none'
	},
	'& .MuiTabs-flexContainer': {
		gap: '20px',
		alignItems: 'start'
	}
}))

export const WlTab = styled(Tab)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.5rem',
	lineHeight: '2rem',
	color: '#fff',
	padding: '0',
	maxWidth: '299px',
	'&.Mui-selected': {
		color: 'var(--color-gold)'
	},
	'&.Mui-disabled': {
		color: '#888585'
	},
}))