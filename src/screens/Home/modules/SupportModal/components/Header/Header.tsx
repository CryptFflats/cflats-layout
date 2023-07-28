'use client'


import { Container, FormHeader } from '../SupportModal/styles';
import Logo from '../Logo/Logo';
import MyWallet from '../MyWallet/MyWallet';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';

const Header = () => {
	const address = useWalletAddressHook()

	return (
		<FormHeader>
			<Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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