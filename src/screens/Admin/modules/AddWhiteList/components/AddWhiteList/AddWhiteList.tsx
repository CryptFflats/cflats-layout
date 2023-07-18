'use client'

import Wrapper from '../../../../containers/Wrapper/Wrapper';
import TabButtons from '../TabButtons/TabButtons';
import MintContainer from '../MintContainer/MintContainer';
import FreeMint from '../FreeMint/FreeMint';
import styles from './AddWhiteList.module.scss'
import DiscountMint from '../DiscountMint/DiscountMint';
import BackToSite from '../../../../UI/BackToSite/BackToSite';
import React, { useState } from 'react';

const AddWhiteList = () => {
	const [value, setValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Wrapper background={'gray-light'}>
			<div className={styles.flexContainer}>
				<TabButtons value={value} handleChange={handleChange} />
				<MintContainer>
					<FreeMint gen={value} />
					<DiscountMint gen={value} />
				</MintContainer>
			</div>
			<BackToSite />
		</Wrapper>
	);
};

export default AddWhiteList;