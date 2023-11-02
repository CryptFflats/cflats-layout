import { useState } from 'react';
import CfImage from 'components/CfImage/CfImage';
import {
	BootstrapInput,
	CustomSelect,
	Option,
	OptionText,
	TokenImageWrapper
} from './slyles';
import { FormControl, SelectChangeEvent } from '@mui/material';
import styles from './Select.module.scss';

export interface TokenDesc {
	id: string;
	img: {
		src: string;
		alt: string;
	};
	label: string;
	value: string;
}

const tokens: Array<TokenDesc> = [
	{
		id: 'usdt',
		img: { src: '0ddbf9c4-8788-4dcc-131d-8f28ba047800/public', alt: 'USDT' },
		label: 'USDT',
		value: 'usdt'
	},
	{
		id: 'usdt',
		img: { src: 'ab20a406-f3ce-4c6c-b5d9-edbd1864a100/public', alt: 'ETH' },
		label: 'ETH',
		value: 'eth'
	}
];

export interface CustomOptionProps {
	token: TokenDesc;
	[key: string]: any;
}

export const CustomOption = (props: CustomOptionProps) => {
	const { token, ...rest } = props;
	return (
		<Option disableRipple key={token.id} value={token.value}>
			<TokenImageWrapper>
				<CfImage src={token.img.src} alt={token.img.alt} fluid />
			</TokenImageWrapper>
			<OptionText {...rest}>{token.label}</OptionText>
		</Option>
	);
};

export const Selector = () => {
	const [token, setToken] = useState('usdt');

	const handleChange = (event: SelectChangeEvent<string>) => {
		console.log(event.target);
		setToken(event.target.value);
	};

	return (
		<FormControl variant='standard'>
			<CustomSelect
				labelId='select'
				id='select'
				value={token}
				onChange={handleChange}
				input={<BootstrapInput />}
				defaultValue={token}
				MenuProps={{ classes: { paper: styles.paper } }}
			>
				{tokens.map((token, i) => (
					<Option disableRipple key={token.id} value={token.value}>
						<TokenImageWrapper>
							<CfImage src={token.img.src} alt={token.img.alt} fluid />
						</TokenImageWrapper>
						<OptionText>{token.label}</OptionText>
					</Option>
				))}
			</CustomSelect>
		</FormControl>
	);
};
