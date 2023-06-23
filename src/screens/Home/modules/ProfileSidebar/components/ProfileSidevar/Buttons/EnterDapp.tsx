import { RxEnter } from 'react-icons/rx'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setDevelopment } from '../../../../../../../core/store/slices/ModalSlice';

const EnterDapp = () => {
	const dispatch = useAppDispatch()
	const t = useTranslations('Info')

	return (
		<ProfileButton
			icon={<RxEnter />}
			text={t('profileSidebar.enterDapp')}
			onClick={() => dispatch(setDevelopment(true))}
		/>
	)
}

export default EnterDapp
