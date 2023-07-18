import { useAccount } from 'wagmi';
import CryptoflatsNFT from '../../../../../core/utils/contract/CryptoflatsNFT';
import { MINT_GEN_ZERO_ADDRESS, MINT_GEN_FIRST_ADDRESS } from '../../../../../core/utils/constance';
import abiForGenZero from '../../../../../core/abi/gen_zero.json';
import abiForGenOne from '../../../../../core/abi/gen_first.json';
import { stringToArr } from '../utils/stringToArr';
import { isAddressesVerify } from '../../../../../core/utils/contract/utils/isAddressesVerify';
import WhiteListService from '../../../../../core/services/WhiteList/WhiteList.service';
import { WlType } from '../../../../../core/services/WhiteList/types';
import { useState } from 'react';

export const useWhiteList = (gen: number, whitelistType: WlType) => {
	const { address, isDisconnected } = useAccount();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const initializeClass = (gen: number) => {
		let cryptoflatsNft: CryptoflatsNFT;

		switch (gen) {
			case 0:
				cryptoflatsNft = new CryptoflatsNFT(
					MINT_GEN_ZERO_ADDRESS,
					address ? address : '',
					0,
					[],
					[],
					abiForGenZero
				);
				break;
			case 1:
				cryptoflatsNft = new CryptoflatsNFT(
					MINT_GEN_FIRST_ADDRESS,
					address ? address : '',
					1,
					[],
					[],
					abiForGenOne
				);
				break;
			// Add more cases for other gen values if needed

			default:
				throw new Error('Invalid gen value');
		}

		return cryptoflatsNft;
	};

	const getWhiteListName = (gen: number) => {
		let whiteListName: string;

		switch (gen) {
			case 0:
				whiteListName = 'gen-zero';
				break;
			case 1:
				whiteListName = 'gen-first'
				break;
			default:
				throw new Error('Invalid gen value');
		}

		return whiteListName;
	};

	const submit = async (data: IFreeMint) => {
		try {
			if (isDisconnected) {
				alert('Wallet is not connect')
				return null;
			}

			setIsLoading(true);
			const addresses = data.addresses;
			const addressesInArr = stringToArr(addresses);
			const isAddressesCorrect = isAddressesVerify(addressesInArr);

			if (!isAddressesCorrect) {
				alert('Addresses Not Correct!');
				return null;
			}

			const whitelistName = getWhiteListName(gen);
			const addressesFromDb = await WhiteListService.getWhiteList({ name: whitelistName, type: whitelistType });
			const cryptoflatsNft = initializeClass(gen);

			if (whitelistType === 'discount') {
				await cryptoflatsNft.addInNewEarlyAccessWhitelistRoot(addressesInArr, addressesFromDb.data.addresses)
			} else if (whitelistType === 'free') {
				await cryptoflatsNft.addInNewFreePurchaseWhitelistRoot(addressesInArr, addressesFromDb.data.addresses);
			}

			await WhiteListService.updateWhiteList({ name: whitelistName, type: whitelistType, addresses: addressesInArr });

			alert('Success');
		} catch (err) {
			alert('Error!');
			throw err;
		} finally {
			setIsLoading(false);
		}
	};

	return { submit, isLoading };
};

interface IFreeMint {
	addresses: string;
}