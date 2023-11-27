'use client';

import styles from './BuyCflatForm.module.scss';
import { CenterBtnWrapper, ErrorMessage, FormWrapper } from './styles';
import { Container } from '../BuyCflatModal/styles';
import { useForm } from 'react-hook-form';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BlueButton } from '../../../../../../styled/BlueButton';
import { ISubmit } from './types';
import TitleBox from 'components/TitleBox/TitleBox';
import { useState } from 'react';
import { styled } from '@mui/material';
import { BuyTab } from '../Tabs/BuyTab/BuyTab';
import { Text } from 'UI/Text';
import { ModalButton } from 'styled/ModalButton';
import { setBuyCflatModal } from 'core/store/slices/ModalSlice';
import { useAppDispatch } from 'core/hooks/store.hook';

const CustomTabs = styled(Tabs)(({ theme }) => ({
	'.MuiTabs-indicator': {

		height: 0
	},

	'.MuiTabs-flexContainer': {
		justifyContent: 'center',
		margin: '-10px !important'
	}
}));

interface StyledTabProps {
	label: string;
	disabled?: boolean;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	fontSize: '17px',
	lineHeight: '23px',
	letterSpacing: '0em',
	textAlign: 'left',
	color: '#C3B6B6',
	border: 'none',
	padding: 0,
	minWidth: '50px',

	'.MuiTabs-indicator': {
		height: 0
	},

	'&.Mui-selected': {
		fontWeight: '700',
		color: '#5E5E5E',
		border: 'none'
	}
}));

const CloseButton = styled(ModalButton)(() => ({
	backgroundColor: '#CA2E2E',
	filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.20))',
	display: 'none',

	'&:hover': {
		backgroundColor: '#CA2E2E'
	},

	'@media(max-width: 768px)': {
		marginTop: '20px',
		display: 'block'
	}
}));

const BuyCflatForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<ISubmit>();

	const submit = (data: ISubmit) => {
		console.log(data);
	};

	const dispatch = useAppDispatch();

	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<FormWrapper>
			<Container>
				<TitleBox.Title className={styles.title}>
					TOKEN SALE MENU
				</TitleBox.Title>
				<TabsWrapper>
					<CustomTabs
						value={value}
						onChange={handleChange}
						aria-label='Buy sell tabs'
					>
						<StyledTab label='Buy' />
						<StyledTab label=' / Sell' disabled />
					</CustomTabs>
					<BuyTab value={value} index={0} />
				</TabsWrapper>
				<TitleBox.Title className={styles.tokenInfoHeader}>
					Token information
				</TitleBox.Title>

				<Text className={styles.tokenInfo}>
					Selling or buying tokens is TAXED at 6%. The liquidity of the token is
					designed for a long term period. Starting price is 0.0005$. You can
					buy our project products with discount, using CFLAT tokens.
				</Text>

				<CenterBtnWrapper>
					<CloseButton onClick={() => dispatch(setBuyCflatModal(false))}>CLOSE</CloseButton>
				</CenterBtnWrapper>
			</Container>
		</FormWrapper>
	);
};

const TabsWrapper = styled(Box)(({ theme }) => ({
	padding: '20px',
	borderRadius: '25px',
	border: '1px solid #C3B6B6',
	background: '#EADEDE',
	minWidth: '300px',
	margin: '0 auto',

	'@media(max-width: 768px)': {
		maxWidth: '500px'
	}
}));

export default BuyCflatForm;
