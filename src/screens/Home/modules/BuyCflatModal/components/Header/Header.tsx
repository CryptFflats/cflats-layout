'use client';

import { CloseButton, Container, FormHeader } from '../BuyCflatModal/styles';
import Logo from '../Logo/Logo';
import MyWallet from '../MyWallet/MyWallet';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import {
	setBuyCflatModal,
	setSupportModal
} from '../../../../../../core/store/slices/ModalSlice';
import useViewportSizes from 'use-viewport-sizes';
import Burger from 'screens/Home/layouts/Navbar/Burger';

const Header = () => {
	const address = useWalletAddressHook();
	const dispatch = useAppDispatch();
	const [vpWidth, vpHeight] = useViewportSizes();
	console.log(vpWidth);

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
