"use client"

import WhiteListService from '../../../../../../core/services/WhiteListService/WhiteList.service';
import CryptoflatsNFT from '../../../../../../core/utils/contract/CryptoflatsNFT';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../../core/utils/constance';
import abi from '../../../../../../core/abi/gen_zero.json';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import ProfileButton from '../ProfileButton/ProfileButton';
import { BiArrowBack } from 'react-icons/bi';
import InWl from '../InWL/InWl';

const GenZero = ({ onClose }: { onClose:  () => void }) => {
	const { address } = useAccount();
	const [inFree, setInFree] = useState<boolean>(false)
	const [inDiscount, setInDiscount] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const getStatus = async () => {
			try {
				const freeList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'free' });
				const discountList = await WhiteListService.getWhiteList({ name: 'gen-zero', type: 'discount' });

				const cryptoflatsNFT = new CryptoflatsNFT(
					MINT_GEN_FIRST_ADDRESS,
					address ? address : '',
					0,
					freeList.data.addresses,
					discountList.data.addresses,
					abi
				);

				setInFree(await cryptoflatsNFT.isUserFreePurchaseWhitelist());
				setInDiscount(await cryptoflatsNFT.isUserEarlyAccessWhiteList())
			} catch(err: any) {
			   throw new Error(err)
			} finally {
				setIsLoading(false)
			}
		}

		getStatus();
	}, [])

	return (
		<>
			<li>
				<ProfileButton
					onClick={onClose}
					icon={<BiArrowBack />}
					text={'Check whitelist status'}
				/>
			</li>
			<li>
				<InWl inFree={inFree} inDiscount={inDiscount} isLoading={isLoading} />
			</li>
		</>
	);
};

export default GenZero;