import { SwapSection } from '../../SwapSection/SwapSection';
import { CustomBlueBottom, TabWrapper } from './styles';
import { TabPanelProps } from '../types';
import { CenterBtnWrapper } from '../../BuyCflatForm/styles';
import { CustomOption, Selector, TokenDesc } from '../../Selector/Selector';
import { memo, useState } from 'react';

const cflat: TokenDesc = {
	id: 'usdt',
	img: {
		src: 'b4ccd4e2-f087-4476-4d98-9ceb09db9e00/public',
		alt: 'CFLAT'
	},
	label: 'CFLAT',
	value: 'cflat'
};

const MemoCflatToken = memo(() => (
	<CustomOption token={cflat} style={{ paddingRight: '8px' }} />
));

export const BuyTab = (props: TabPanelProps) => {
	const { value, index } = props;
	const [payValue, setPayValue] = useState(0);
	const [receiveValue, setReceiveValue] = useState(0);

	const handleBuy: React.MouseEventHandler<HTMLButtonElement> = () => {
		try {
			alert('Nick implement me!!!');
		} catch (error) {}
	};

	return (
		<>
			{value === index && (
				<>
					<TabWrapper role='tabpanel' hidden={value !== index}>
						<SwapSection
							amount={payValue}
							title='You pay'
							maxLabel
							TokenComponent={Selector}
							onChange={setPayValue}
						/>
						<SwapSection
							amount={receiveValue}
							title='You receive'
							{...props}
							TokenComponent={MemoCflatToken}
							onChange={setReceiveValue}
						/>
					</TabWrapper>
					<CenterBtnWrapper>
						<CustomBlueBottom onClick={handleBuy}>BUY TOKENS</CustomBlueBottom>
					</CenterBtnWrapper>
				</>
			)}
		</>
	);
};
