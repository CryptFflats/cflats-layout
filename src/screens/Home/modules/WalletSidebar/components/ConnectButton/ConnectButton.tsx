import { FC, ReactNode } from 'react'
import styles from './ConnectButton.module.scss'
import { ButtonBase, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ConnectButtonProps {
	icon: ReactNode
	text: string
	onClick: () => void
	isLoading?: boolean
}

const StyledButton = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	background: 'transparent',
	padding: '23px 35px;',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	border: 'none',
	transition: '0.7s',
	cursor: 'pointer',
	'&:disabled': {
		background: '#3D3D3D'
	},
	'&:hover': {
		background: '#3D3D3D'
	},
	'@media (max-width: 576px)': {
		padding: '21px 30px',
		'&:hover': {
			background: 'transparent'
		}
	}
}))

const ConnectButton: FC<ConnectButtonProps> = ({
	icon,
	text,
	onClick,
	isLoading
}) => {
	return (
		<StyledButton
			disabled={isLoading}
			onClick={onClick}
			className={styles.connectButton}
		>
			<span className={styles.group}>
				<i className={styles.icon}>{icon}</i>
				<i className={styles.text}>{text}</i>
			</span>

			{isLoading && <CircularProgress size={30} sx={{ color: '#A5A5A5' }} />}
		</StyledButton>
	)
}

export default ConnectButton
