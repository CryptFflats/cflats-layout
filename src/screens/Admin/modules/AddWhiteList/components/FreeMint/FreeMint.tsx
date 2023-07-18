'use client'

import { FC, useEffect, useState } from 'react';
import styles from './FreeMint.module.scss'
import Container from '../../../../containers/Container/Container';
import LineInput from '../../../../UI/LineInput/LineInput';
import YellowButton from '../../../../UI/YellowButton/YellowButton';
import { useForm } from 'react-hook-form';
import { stringToArr } from '../../utils/stringToArr';
import { isAddressesVerify } from '../../../../../../core/utils/contract/utils/isAddressesVerify';
import WhiteListService from '../../../../../../core/services/WhiteList/WhiteList.service';
import { MINT_GEN_ZERO_ADDRESS } from '../../../../../../core/utils/constance';
import { useAccount } from 'wagmi';
import CryptoflatsNFT from '../../../../../../core/utils/contract/CryptoflatsNFT';
import abi from '../../../../../../core/abi/gen_zero.json';
import { useWhiteList } from '../../hooks/useWhiteList';
import { Backdrop, CircularProgress } from '@mui/material';


interface IFreeMint {
	addresses: string
}

interface FreeMintProps {
	gen: number
}

const FreeMint: FC<FreeMintProps> = ({ gen }) => {
	const { submit, isLoading } = useWhiteList(gen, 'free')
	const { register, handleSubmit, reset } = useForm<IFreeMint>();

	const addToFreeWl = async (data: IFreeMint) => {
		try {
			await submit(data);
			reset()
		} catch(err) {
		    throw err
		}
	}

	return (
		<div className={styles.freeMint}>
			<Container>
				<form onSubmit={handleSubmit(addToFreeWl)}>
					<h1>FREE MINT WALLETS</h1>

					<LineInput {...register('addresses')} />

					<YellowButton type={'submit'} sx={{ marginTop: '45px' }}>
						ADD TO FREE WL
					</YellowButton>
				</form>
			</Container>

			<Backdrop sx={{ zIndex: 1000 }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default FreeMint;