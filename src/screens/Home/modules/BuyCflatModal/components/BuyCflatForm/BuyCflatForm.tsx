'use client';

import styles from './BuyCflatForm.module.scss';
import { ErrorMessage, FormWrapper } from './styles';
import {
	Container,
	FormElement,
	Input,
	InputLabel
} from '../BuyCflatModal/styles';
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

const CustomTabs = styled(Tabs)(({ theme }) => ({
	'.MuiTabs-indicator': {
		height: 0
	},

	'.MuiTabs-flexContainer': {
		justifyContent: 'center'
	}
}));

interface StyledTabProps {
	label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	fontFamily: 'Open Sans',
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
	},
	'&.Mui-focusVisible': {
		// backgroundColor: 'rgba(100, 95, 228, 0.32)'
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
						/
						<StyledTab label='Sell' />
					</CustomTabs>
					<BuyTab value={value} index={0} />
				</TabsWrapper>
			</Container>
		</FormWrapper>
	);
};

const TabsWrapper = styled(Box)(({ theme }) => ({
	padding: '22px 14px',
	borderRadius: '25px',
	border: '1px solid #C3B6B6',
	background: '#EADEDE',
	minWidth: '300px',
	maxWidth: '500px',
	margin: '0 auto'
}));

export default BuyCflatForm;
