"use client"

import ProfileButton from '../ProfileButton/ProfileButton';
import { setTypeMenu } from '../../slices/ProfileSidebarSlice';
import { BiArrowBack } from 'react-icons/bi';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { FC } from 'react';

interface ButtonsProps {
	onOpenFirst: () => void
}

const Buttons: FC<ButtonsProps> = ({ onOpenFirst }) => {
	const dispatch = useAppDispatch()

	return (
		<>
			<li>
				<ProfileButton
					onClick={() => dispatch(setTypeMenu('menu'))}
					icon={<BiArrowBack />}
					text={'Check whitelist status'}
				/>
			</li>
			<li>
				<ProfileButton onClick={onOpenFirst} text={'GEN#1 - NFT LIVING ROOMS'} />
			</li>
		</>
	);
};

export default Buttons;