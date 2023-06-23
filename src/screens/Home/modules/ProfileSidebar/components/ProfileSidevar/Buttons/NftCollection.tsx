import { MdOutlineCollections } from 'react-icons/md'
import ProfileButton from '../../ProfileButton/ProfileButton'
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { setDevelopment } from '../../../../../../../core/store/slices/ModalSlice';

const NftCollection = () => {
	const dispatch = useAppDispatch()
	const t = useTranslations('Info')

	return (
		<ProfileButton
			icon={<MdOutlineCollections />}
			text={t('profileSidebar.nftCollection')}
			onClick={() => dispatch(setDevelopment(true))}
		/>
	)
}

export default NftCollection
