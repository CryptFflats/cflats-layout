'use client'

import { FC, useState } from 'react';
import styles from './FreeMint.module.scss'
import Container from '../../../../containers/Container/Container';
import LineInput from '../../../../UI/LineInput/LineInput';
import YellowButton from '../../../../UI/YellowButton/YellowButton';
import { useForm } from 'react-hook-form';
import { stringToArr } from '../../utils/stringToArr';
import { isAddressesVerify } from '../../../../../../core/utils/contract/utils/isAddressesVerify';
import WhiteListService from '../../services/WhiteList.service';
import { MINT_GEN_ZERO_ADDRESS } from '../../../../../../core/utils/constance';
import { useAccount } from 'wagmi';
import CryptoflatsNFT from '../../../../../../core/utils/contract/CryptoflatsNFT';
import abi from '../../../../../../core/abi/gen_zero.json';


interface IFreeMint {
	freeAddresses: string
}

const FreeMint: FC = () => {
	const { register, handleSubmit } = useForm<IFreeMint>();
	const { address } = useAccount();
	const cryptoflatsNft = new CryptoflatsNFT(
		MINT_GEN_ZERO_ADDRESS,
		address ? address : '',
		0,
		[],
		[],
		abi
	)

	const submit = async (data: IFreeMint) => {
		try {
			const addresses = data.freeAddresses;
			const addressesInArr = stringToArr(addresses);
			const addressesInObj = { addresses: addressesInArr }
			const isAddressesCorrect = isAddressesVerify(addressesInArr);

			if (!isAddressesCorrect) {
				console.log('Addresses Not Correct!')
				return null;
			}

			const addressesFromDb = await WhiteListService.getGenZeroFree();
			await cryptoflatsNft.addInNewFreePurchaseWhitelistRoot(addressesInArr, addressesFromDb)

			await WhiteListService.addToGenZeroFree(addressesInObj);

			alert('Success')
		} catch(err) {
			alert('Error!')
			throw err;
		}
	}

	return (
		<div className={styles.freeMint}>
			<Container>
				<form onSubmit={handleSubmit(submit)}>
					<h1>FREE MINT WALLETS</h1>

					<LineInput {...register('freeAddresses')} />

					<YellowButton type={'submit'} sx={{ marginTop: '45px' }}>
						ADD TO FREE WL
					</YellowButton>
				</form>
			</Container>
		</div>
	);
};

export default FreeMint;