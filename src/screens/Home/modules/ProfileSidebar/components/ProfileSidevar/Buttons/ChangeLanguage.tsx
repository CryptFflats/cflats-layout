import { IoIosGlobe } from 'react-icons/io'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { setTypeMenu } from '../../../slices/ProfileSidebarSlice'
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { useLocale } from 'use-intl';

const ChangeLanguage = () => {
	const dispatch = useAppDispatch()
	const t = useTranslations('Info')
	const locale = useLocale()

	return (
		<ProfileButton
			onClick={() => dispatch(setTypeMenu('lang'))}
			icon={<IoIosGlobe />}
			text={`${t('profileSidebar.language')} (${locale})`}
		/>
	)
}

export default ChangeLanguage
