
import { AiOutlineDollar } from 'react-icons/ai'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setDevelopment } from '../../../../../../../core/store/slices/ModalSlice';

const BuyCflat = () => {
	const dispatch = useAppDispatch()
	const t = useTranslations('Info')

	return (
		<ProfileButton
			icon={<AiOutlineDollar />}
			text={t('profileSidebar.buyCflat')}
			onClick={() => dispatch(setDevelopment(true))}
		/>
	)
}

export default BuyCflat
