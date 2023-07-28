"use client"

import WhiteListService from '../../../../../../core/services/WhiteList/WhiteList.service';
import CryptoflatsNFT from '../../../../../../core/utils/contract/CryptoflatsNFT';
import { MINT_GEN_FIRST_ADDRESS } from '../../../../../../core/utils/constance';
import abi from '../../../../../../core/abi/gen_first.json';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import ProfileButton from '../ProfileButton/ProfileButton';
import { BiArrowBack } from 'react-icons/bi';
import InWl from '../InWL/InWl';

const GenFirst = ({ onClose }: { onClose:  () => void }) => {
	const { address } = useAccount();
	const [inFree, setInFree] = useState<boolean>(false)
	const [inDiscount, setInDiscount] = useState<boolean>(false)

	useEffect(() => {
		const getStatus = async () => {
			const freeList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'free' });
			const discountList = await WhiteListService.getWhiteList({ name: 'gen-first', type: 'discount' });

			const cryptoflatsNFT = new CryptoflatsNFT(
				MINT_GEN_FIRST_ADDRESS,
				address ? address : '',
				1,
				freeList.data.addresses,
				discountList.data.addresses,
				abi
			);

			setInFree(await cryptoflatsNFT.isUserFreePurchaseWhitelist());
			setInDiscount(await cryptoflatsNFT.isUserEarlyAccessWhiteList())
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
				<InWl inFree={inFree} inDiscount={inDiscount} />
			</li>
		</>
	);
};

export default GenFirst;