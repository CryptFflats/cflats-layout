'use client'

import { FC, useEffect } from 'react';
import styles from './DiscountMint.module.scss'
import LineInput from '../../../../UI/LineInput/LineInput';
import YellowButton from '../../../../UI/YellowButton/YellowButton';
import Container from '../../../../containers/Container/Container';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import CryptoflatsNFT from '../../../../../../core/utils/contract/CryptoflatsNFT';
import { MINT_GEN_ZERO_ADDRESS } from '../../../../../../core/utils/constance';
import abi from '../../../../../../core/abi/gen_zero.json';
import { stringToArr } from '../../utils/stringToArr';
import { isAddressesVerify } from '../../../../../../core/utils/contract/utils/isAddressesVerify';
import WhiteListService from '../../../../../../core/services/WhiteListService/WhiteList.service';
import { useWhiteList } from '../../hooks/useWhiteList';
import { Backdrop, CircularProgress } from '@mui/material';

interface IDiscountMint {
	addresses: string
}

interface DiscountMintProps {
	gen: number
}


const DiscountMint: FC<DiscountMintProps> = ({ gen }) => {
	const { submit, isLoading	} = useWhiteList(gen, 'discount')
	const { register, handleSubmit, reset } = useForm<IDiscountMint>();

	const addToWl = async (data: IDiscountMint) => {
	  try {
	  	await submit(data)
			reset()
	  } catch(err) {
			throw err
	  }
	}


	return (
		<div className={styles.discountMint}>
			<Container>
				<form onSubmit={handleSubmit(addToWl)}>
					<h1>DISCOUNT WALLETS</h1>

					<LineInput {...register('addresses')} />

					<YellowButton type={'submit'} sx={{ marginTop: '45px' }}>
						ADD TO DISCOUNT WL
					</YellowButton>
				</form>
			</Container>

			<Backdrop sx={{ zIndex: 1000 }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default DiscountMint;