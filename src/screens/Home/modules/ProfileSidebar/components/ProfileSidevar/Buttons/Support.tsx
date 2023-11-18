
import { BiSupport } from 'react-icons/bi'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setSupportModal} from '../../../../../../../core/store/slices/ModalSlice';
import { setProfileActive } from 'core/store/slices/MenuSlice';

const Support = () => {
	const dispatch = useAppDispatch()

	const t = useTranslations('Info')

	return (
		<ProfileButton
			icon={<BiSupport />}
			text={t('profileSidebar.support')}
			onClick={() => {
				dispatch(setSupportModal(true));
				dispatch(setProfileActive(false));
			}}
		/>
	)
}

export default Support
