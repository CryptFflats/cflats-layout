"use client"

import IcWl from '../../../../../../../assets/images/icons/ic_wl.svg'
import ProfileButton from '../../ProfileButton/ProfileButton';
import { setTypeMenu } from '../../../slices/ProfileSidebarSlice';
import { useAppDispatch } from '../../../../../../../core/hooks/store.hook';

const CheckWl= () => {
	const dispatch = useAppDispatch()

	return (
		<ProfileButton icon={<IcWl/>}
									 text={'Check whitelist status'}
									 onClick={() => dispatch(setTypeMenu('wl'))}
		/>
	);
};

export default CheckWl;