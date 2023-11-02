import { SwapSection } from '../../SwapSection/SwapSection';
import { CustomBlueBottom, TabWrapper } from './styles';
import { TabPanelProps } from '../types';
import { CenterBtnWrapper } from '../../BuyCflatForm/styles';
import { CustomOption, Selector, TokenDesc } from '../../Selector/Selector';

const cflat: TokenDesc = {
	id: 'usdt',
	img: {
		src: 'b4ccd4e2-f087-4476-4d98-9ceb09db9e00/public',
		alt: 'CFLAT'
	},
	label: 'CFLAT',
	value: 'cflat'
};

export const BuyTab = (props: TabPanelProps) => {
	const { value, index } = props;

	return (
		<>
			{value === index && (
				<>
					<TabWrapper role='tabpanel' hidden={value !== index}>
						<SwapSection
							amount={0}
							title='You pay'
							maxLabel
							TokenComponent={Selector}
							{...props}
						/>
						<SwapSection
							amount={0}
							title='You receive'
							{...props}
							TokenComponent={() => (
								<CustomOption token={cflat} style={{ paddingRight: '8px' }} />
							)}
						/>
					</TabWrapper>
					<CenterBtnWrapper>
						<CustomBlueBottom>BUY TOKENS</CustomBlueBottom>
					</CenterBtnWrapper>
				</>
			)}
		</>
	);
};
