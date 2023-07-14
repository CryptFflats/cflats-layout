'use client'

import { FC } from 'react';
import styles from './DiscountMint.module.scss'
import LineInput from '../../../../UI/LineInput/LineInput';
import YellowButton from '../../../../UI/YellowButton/YellowButton';
import Container from '../../../../containers/Container/Container';

const DiscountMint: FC = () => {
	return (
		<div className={styles.discountMint}>
			<Container>
				<h1>DISCOUNT WALLETS</h1>

				<LineInput />

				<YellowButton sx={{ marginTop: '45px' }}>
					ADD TO DISCOUNT WL
				</YellowButton>
			</Container>
		</div>
	);
};

export default DiscountMint;