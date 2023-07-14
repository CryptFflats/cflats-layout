'use client'

import Wrapper from '../../../../containers/Wrapper/Wrapper';
import TabButtons from '../TabButtons/TabButtons';
import MintContainer from '../MintContainer/MintContainer';
import FreeMint from '../FreeMint/FreeMint';
import styles from './AddWhiteList.module.scss'
import DiscountMint from '../DiscountMint/DiscountMint';
import BackToSite from '../../../../UI/BackToSite/BackToSite';

const AddWhiteList = () => {
	return (
		<Wrapper background={'gray-light'}>
			<div className={styles.flexContainer}>
				<TabButtons />
				<MintContainer>
					<FreeMint />
					<DiscountMint />
				</MintContainer>
			</div>
			<BackToSite />
		</Wrapper>
	);
};

export default AddWhiteList;