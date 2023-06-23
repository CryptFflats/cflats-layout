import { useDisconnect } from 'wagmi'
import { TbLogout } from 'react-icons/tb'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { useTranslations } from 'next-intl';

const LogOut = () => {
	const { disconnect } = useDisconnect()
	const t = useTranslations('Info')

	return (
		<ProfileButton
			icon={<TbLogout />}
			text={t('profileSidebar.logOut')}
			onClick={disconnect}
		/>
	)
}

export default LogOut
