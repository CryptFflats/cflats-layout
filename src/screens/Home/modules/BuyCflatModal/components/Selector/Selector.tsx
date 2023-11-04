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
	address: string;
}

const tokens: Array<TokenDesc> = [
	{
		id: 'eth',
		img: { src: 'ab20a406-f3ce-4c6c-b5d9-edbd1864a100/public', alt: 'ETH' },
		label: 'ETH',
		value: 'eth',
		address: "0x0000000000000000000000000000000000000000",
	},
	{
		id: 'usdt',
		img: { src: '0ddbf9c4-8788-4dcc-131d-8f28ba047800/public', alt: 'USDT' },
		label: 'USDT',
		value: 'usdt',
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
	},
];

export interface CustomOptionProps {
	token: TokenDesc;
	[key: string]: any;
}

export function getUsedToken()
{
	return TokenAddressMap.address;
}

function setUsedToken(tokenAddress: string)
{
	TokenAddressMap.address = tokenAddress;
}

const TokenAddressMap = {
	"address": tokens[0].address
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
	const [token, setToken] = useState('eth');

	const handleChange = (event: SelectChangeEvent<string>) => {
		setToken(event.target.value);
		
		for(let i = 0; i < tokens.length; i++)
		{
			if(event.target.value === tokens[i].value)
			{
				setUsedToken(tokens[i].address);
				return;
			}
		}
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
