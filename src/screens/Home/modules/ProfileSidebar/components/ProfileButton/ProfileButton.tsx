import { FC, ReactNode } from 'react'
import { Styles } from './styles'

interface ProfileButtonProps {
	href?: string
	onClick?: () => void
	icon?: ReactNode
	text: string
}

const ProfileButton: FC<ProfileButtonProps> = ({
	href,
	onClick,
	icon,
	text
}) => {
	return (
		<Styles href={href} onClick={onClick}>
			{ icon && <i>{icon}</i> }
			<p>{text}</p>
		</Styles>
	)
}

export default ProfileButton
