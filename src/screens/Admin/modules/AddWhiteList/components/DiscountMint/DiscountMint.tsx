'use client'

import { FC } from 'react';
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
import WhiteListService from '../../services/WhiteList.service';

interface IDiscountMint {
	discountAddresses: string
}

const DiscountMint: FC = () => {
	const { register, handleSubmit } = useForm<IDiscountMint>();
	const { address } = useAccount();
	const cryptoflatsNft = new CryptoflatsNFT(
		MINT_GEN_ZERO_ADDRESS,
		address ? address : '',
		0,
		[],
		[],
		abi
	)


	const submit = async (data: IDiscountMint) => {
		try {
			const addresses = data.discountAddresses;
			const addressesInArr = stringToArr(addresses);
			const addressesInObj = { addresses: addressesInArr }
			const isAddressesCorrect = isAddressesVerify(addressesInArr);

			if (!isAddressesCorrect) {
				console.log('Addresses Not Correct!')
				return null;
			}

			const addressesFromDb = await WhiteListService.getGenZeroDiscount();
			await cryptoflatsNft.addInNewEarlyAccessWhitelistRoot(addressesInArr, addressesFromDb)

			await WhiteListService.addToGenZeroDiscount(addressesInObj);

			alert('Success')
		} catch(err) {
			alert('Error!')
			throw err;
		}
	}


	return (
		<div className={styles.discountMint}>
			<Container>
				<form onSubmit={handleSubmit(submit)}>
					<h1>DISCOUNT WALLETS</h1>

					<LineInput {...register('discountAddresses')} />

					<YellowButton type={'submit'} sx={{ marginTop: '45px' }}>
						ADD TO DISCOUNT WL
					</YellowButton>
				</form>
			</Container>
		</div>
	);
};

export default DiscountMint;