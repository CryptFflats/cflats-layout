import { AiOutlineDollar } from 'react-icons/ai';
import ProfileButton from '../../ProfileButton/ProfileButton';
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';
import { useTranslations } from 'next-intl';
import { setBuyCflatModal, setDevelopment } from '../../../../../../../core/store/slices/ModalSlice';
import { setProfileActive } from 'core/store/slices/MenuSlice';

const BuyCflat = () => {
	const dispatch = useAppDispatch();
	const t = useTranslations('Info');

	return (
		<ProfileButton
			icon={<AiOutlineDollar />}
			text={t('profileSidebar.buyCflat')}
			onClick={() => dispatch(setDevelopment(true))}
			// onClick={() => {
			// 	dispatch(setBuyCflatModal(true));
			// 	dispatch(setProfileActive(false));
			// }}
		/>
	);
};

export default BuyCflat;
