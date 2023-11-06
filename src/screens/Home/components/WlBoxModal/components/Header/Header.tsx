'use client';

import { CloseButton, Container, FormHeader } from '../WlBoxModal/styles';
import Logo from '../Logo/Logo';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setWlBoxModal } from '../../../../../../core/store/slices/ModalSlice';
import { MyWallet } from 'UI/MyWallet';

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
				<MyWallet />
			</Container>
		</FormHeader>
	);
};

export default Header;
