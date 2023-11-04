import React from 'react';
import {
	ComponentHolder,
	MaxLabel,
	SwapSectionAmount,
	SwapSectionRow,
	SwapSectionTitle,
	SwapSectionWrapper
} from './styles';
import { SwapSectionProps } from './types';

export const SwapSection = (props: SwapSectionProps) => {
	const { amount, title, TokenComponent, maxLabel, onChange } = props;

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.target.value;
		const onlyNumbers = value.split(/ /)[0].replace(/[^\d]/g, '');

		onChange(+onlyNumbers);
	};

	const handleMaxClick: React.MouseEventHandler<HTMLSpanElement> = () => {
		onChange(100);
	};

	return (
		<SwapSectionWrapper>
			<SwapSectionRow sx={{ mb: '8px' }}>
				<SwapSectionTitle>{title}</SwapSectionTitle>
				{maxLabel && <MaxLabel onClick={handleMaxClick}>max</MaxLabel>}
			</SwapSectionRow>
			<SwapSectionRow>
				<SwapSectionAmount value={amount} onChange={handleChange} />
				<ComponentHolder>
					<TokenComponent />
				</ComponentHolder>
			</SwapSectionRow>
		</SwapSectionWrapper>
	);
};
