'use client';

import { CloseButton, Container, FormHeader } from '../BuyCflatModal/styles';
import { Logo } from 'UI/Logo';
import { MyWallet } from 'UI/MyWallet';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import {
	setBuyCflatModal,
	setSupportModal
} from '../../../../../../core/store/slices/ModalSlice';

const WalletAddress = styled('p')(() => ({
	fontSize: '16px',
	'@media(max-width: 768px)': {
		display: 'none'
	}
}));

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
				<Logo />
				<FlexGroup>
					<MyWallet onlyIcon />

					<WalletAddress>{address}</WalletAddress>

					<CloseButton onClick={() => dispatch(setBuyCflatModal(false))}>
						<IcClose />
					</CloseButton>
				</FlexGroup>
			</Container>
		</FormHeader>
	);
};

export default Header;

const FlexGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '21px',
	alignItems: 'center'
}));
