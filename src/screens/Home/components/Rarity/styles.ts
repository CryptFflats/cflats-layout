import { styled } from '@mui/material/styles'
import { Tabs, Tab, Box } from '@mui/material'

export const TabButtons = styled(Tabs)(({ theme }) => ({
	marginTop: '120px',

	'& .MuiTabs-indicator': {
		display: 'none'
	},

	'& .MuiTabs-flexContainer': {
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: '20px',

		'@media(max-width: 576px)': {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},

	'@media(max-width: 576px)': {
		marginTop: '70px'
	}
}))

export const TabContainer = styled('div')(({ theme }) => ({
	maxWidth: '1320px',
	padding: '0 20px',
	margin: '0 auto',

	'@media(max-width: 1200px)': {
		maxWidth: '550px'
	}
}))

export const TabButton = styled(Tab)(({ theme }) => ({
	fontFamily: "'Open Sans', sans-serif",
	fontSize: '1.125rem',
	lineHeight: '1.5rem',
	fontWeight: 600,
	color: '#fff',
	textTransform: 'uppercase',
	padding: '8px 18px',
	borderRadius: '20px',
	border: '2px solid transparent',

	'&.Mui-selected': {
		borderColor: '#fff',
		color: '#fff',

		'&.active-gold': {
			color: 'var(--color-yellow)',
			borderColor: 'var(--color-yellow)'
		},

		'&.active-diamond': {
			color: 'var(--color-diamond)',
			borderColor: 'var(--color-diamond)'
		}
	}
}))

export const TabWrapper = styled(Box)(({ theme }) => ({
	width: '100%',
	position: 'relative',
	minHeight: '500px',
	backgroundSize: 'cover',
	padding: '70px 0 200px 0',
	textAlign: 'center',

	'@media(max-width: 1200px)': {
		padding: '70px 0'
	}
}))

export const AboutFlats = styled('div')(({ theme }) => ({
	background: 'rgba(45, 45, 45, 0.9)',
	borderRadius: '40px',
	padding: '24px 40px',
	display: 'inline-block',
	maxWidth: '1110px',
	margin: '0 auto 100px auto',

	'@media (max-width: 1200px)': {
		display: 'none'
	}
}))

export const Apartment = styled('div')(({ theme }) => ({
	maxWidth: '500px',
	maxHeight: '500px'
}))

export const FlatInfo = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	background: 'rgba(45, 45, 45, 0.9)',
	borderRadius: '40px',
	padding: '58px 41px',

	'@media(max-width: 1200px)': {
		marginTop: '70px'
	},

	'@media(max-width: 768px)': {
		padding: '40px'
	}
}))

export const Info = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '25px',
	fontSize: '1.25rem',
	lineHeight: '1.7rem',
	color: '#fff',

	'@media(max-width: 768px)': {
		marginBottom: '15px',
		fontSize: '1rem'
	},

	'&:last-child': {
		margin: '0'
	},

	'> span.yellow': {
		color: 'var(--color-yellow)',
		textAlign: 'left'
	},

	'> span': {
		textAlign: 'right'
	}
}))
