'use client';

import React, { FC, useState } from 'react';
import { WlTab, WlTabs } from './styles';

const a11yProps = (index: number) => {
	return {
		id: `wl-tab-${index}`,
		'aria-controls': `wl-tab-${index}`
	};
};

const tabsData = [
	{ label: 'GEN 0 NFT PASSES', value: 0, disabled: false },
	{ label: 'GEN 1 LIVING ROOMS', value: 1, disabled: false },
	{ label: 'GEN 2 BEDROOMS', value: 2, disabled: true },
	{ label: 'GEN 3 DINING ROOMS', value: 3, disabled: true },
	{ label: 'GEN 4 PLAYROOMS', value: 4, disabled: true },
	{ label: 'GEN 5 SECRET ROOMS', value: 5, disabled: true },
];

interface TabButtonProps {
	handleChange: (event: React.SyntheticEvent, newValue: number) => void
	value: number
}

const TabButtons: FC<TabButtonProps> = ({ handleChange, value }) => {

	// const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	// 	setValue(newValue);
	// };


	return (
		<WlTabs value={value} onChange={handleChange} orientation={'vertical'}>
			{
				tabsData.map((item, index) => {
					return <WlTab
						key={`mint-tab-${index}`}
						disabled={item.disabled}
						label={item.label}
						{...a11yProps(item.value)}
					/>
				})
			}
		</WlTabs>
	);
};

export default TabButtons;