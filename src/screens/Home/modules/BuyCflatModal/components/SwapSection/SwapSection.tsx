import {
	MaxLabel,
	SwapSectionAmount,
	SwapSectionRow,
	SwapSectionTitle,
	SwapSectionWrapper
} from './styles';
import { SwapSectionProps } from './types';

export const SwapSection = (props: SwapSectionProps) => {
	const { amount, title, TokenComponent, maxLabel } = props;
	return (
		<SwapSectionWrapper>
			<SwapSectionRow sx={{ mb: '8px' }}>
				<SwapSectionTitle>{title}</SwapSectionTitle>
				{maxLabel && <MaxLabel>max</MaxLabel>}
			</SwapSectionRow>
			<SwapSectionRow>
				<SwapSectionAmount>{amount}</SwapSectionAmount>
				<TokenComponent />
			</SwapSectionRow>
		</SwapSectionWrapper>
	);
};
