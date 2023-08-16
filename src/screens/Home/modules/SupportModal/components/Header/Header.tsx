'use client'


import { CloseButton, Container, FormHeader } from '../SupportModal/styles';
import Logo from '../Logo/Logo';
import MyWallet from '../MyWallet/MyWallet';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg'
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setSupportModal } from '../../../../../../core/store/slices/ModalSlice';

const Header = () => {
	const address = useWalletAddressHook();
	const dispatch = useAppDispatch();

	return (
		<FormHeader>
			<Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<CloseButton onClick={() => dispatch(setSupportModal(false))}>
					<IcClose />
				</CloseButton>
				<Logo />
				<FlexGroup>
					<MyWallet />
					<div>{address}</div>
				</FlexGroup>
			</Container>
		</FormHeader>
	);
};

export default Header;

const FlexGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '100px',
	alignItems: 'center'
}))