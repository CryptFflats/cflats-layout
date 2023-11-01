import { BlueButton } from 'styled/BlueButton';
import { SwapSection } from '../../SwapSection/SwapSection';
import { BuyTabWrapper } from './styles';
import { TabPanelProps } from '../types';

export const BuyTab = (props: TabPanelProps) => {
	const { value, index } = props;

	return (
		<>
			{value === index && (
				<BuyTabWrapper role='tabpanel' hidden={value !== index}>
					<SwapSection amount={0} title='You pay' maxLabel {...props} />
					<SwapSection amount={0} title='You receive' {...props} />
					<BlueButton sx={{ mt: '35px' }}>BUY TOKENS</BlueButton>
				</BuyTabWrapper>
			)}
		</>
	);
};
