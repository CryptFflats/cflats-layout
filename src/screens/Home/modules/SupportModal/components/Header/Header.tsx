'use client'


import { CloseButton, Container, FormHeader } from '../SupportModal/styles';
import { styled } from '@mui/material/styles';
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg'
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setSupportModal } from '../../../../../../core/store/slices/ModalSlice';
import { MyWallet } from 'UI/MyWallet';
import { Logo } from 'UI/Logo';
import { WalletAddress } from 'UI/WalletAddress';
import styles from "./Header.module.scss"

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
				<div className={styles.col}>
					<FlexGroup>
						<MyWallet textClassName={styles.text} />
						<WalletAddress>{address}</WalletAddress>
					</FlexGroup>
					<CloseButton onClick={() => dispatch(setSupportModal(false))}>
						<IcClose />
					</CloseButton>
				</div>
			</Container>
		</FormHeader>
	);
};

export default Header;

const FlexGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '60px',
	alignItems: 'center'
}))