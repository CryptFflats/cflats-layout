'use client';

import { CloseButton, Container, FormHeader } from '../../styles';
import Logo from '../Logo/Logo';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setWlBoxModal } from '../../../../../../core/store/slices/ModalSlice';

const Header = () => {
	const address = useWalletAddressHook();
	const dispatch = useAppDispatch();

	return (
		<FormHeader>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<CloseButton onClick={() => dispatch(setWlBoxModal(false))}>
					<IcClose />
				</CloseButton>
				<Logo />
			</Container>
		</FormHeader>
	);
};

export default Header;
