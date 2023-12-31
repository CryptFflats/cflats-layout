'use client';

import { ErrorMessage, FormWrapper } from './styles';
import {
	Container,
	FormElement,
	FormElementWrapper,
	Input,
	InputLabel
} from '../WlBoxModal/styles';

import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { BlueButton } from '../../../../../../styled/BlueButton';
import { ISubmit } from './types';
import { TextButton } from 'screens/Home/UI/Button';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import {
	getNftContract,
	getWlBoxByGen
} from 'core/utils/contract/utils/contracts';
import BigNumber from 'bignumber.js';
import { useAppDispatch } from 'core/hooks/store.hook';
import {
	setErrorMessage,
	setIsMintErrorActive
} from 'core/store/slices/MintError';
import styles from './WlForm.module.scss';
import { useState } from 'react';
import { Text } from 'UI/Text';
import { ModalButton } from 'styled/ModalButton';
import { DISCOUT_WL_ADDRESSES, FREE_WL_ADDRESSES, getMerkleTreeData } from 'core/utils/utils/helpers';
import { useMintForGenOneIfSignerInWl } from 'screens/Home/modules/MintFirstGen/hooks/useMintForGenOneIfSignerInWl';

const WlForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<ISubmit>();

	const dispatch = useAppDispatch();
	const NOT_WL_BOX_ID = 555_555_555n;
	const [getErrorMsg, setErrorMsg] = useState('');

	const submit = async (data: ISubmit) => {
		const boxId = data.boxId;

		if (isNaN(Number(boxId))) {
			return;
		}

		
		try {
			const signer = await CflatsSigner.getSigner();
			const contractGen = await getNftContract(1, signer);
			const isWlBoxUsed = await contractGen.isWlBoxIdUsed(boxId);
			
			const merkleTreeDataFree = getMerkleTreeData(FREE_WL_ADDRESSES, signer.address);
			const merkleTreeDataDiscount = getMerkleTreeData(DISCOUT_WL_ADDRESSES, signer.address);
			
			if(!isWlBoxUsed) {
				await contractGen.mint(
					merkleTreeDataFree.merkleProof,
					merkleTreeDataDiscount.merkleProof,
					boxId
					);
			} else {
				const isUserFreePurchaseWhitelistWithoutWlBox = await contractGen.isUserFreePurchaseWhitelist(merkleTreeDataFree.merkleProof, signer.address, NOT_WL_BOX_ID);
				const isUserEarlyAccessWhitelist = await contractGen.isUserEarlyAccessWhitelist(merkleTreeDataDiscount.merkleProof, signer.address);
				
				const boolToText = isUserFreePurchaseWhitelistWithoutWlBox === true ? `Sorry, but your WL BOX ${boxId} is already used you can choose other options of mint. You still can claim your NFT for free because you are in a FREE PURCHASE WHITELIST!` :
					isUserEarlyAccessWhitelist ? `Sorry, but your WL BOX ${boxId} is already used you can choose other options of mint. You can claim your NFT with a discount because you are in a DISCOUNT WHITELIST!` : 
					`Sorry, but your WL BOX ${boxId} is already used you can choose other options of mint`;

				dispatch(setIsMintErrorActive(true))
				dispatch(setErrorMessage(boolToText));
			}
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const submitWithoutWlBox = async () => {
		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);
		const merkleTreeDataFree = getMerkleTreeData(FREE_WL_ADDRESSES, signer.address);
		const merkleTreeDataDiscount = getMerkleTreeData(DISCOUT_WL_ADDRESSES, signer.address);

		try {
			const isUserFreePurchaseWhitelistWithoutWlBox = await contractGen.isUserFreePurchaseWhitelist(merkleTreeDataFree.merkleProof, signer.address, NOT_WL_BOX_ID);
			const isUserEarlyAccessWhitelist = await contractGen.isUserEarlyAccessWhitelist(merkleTreeDataDiscount.merkleProof, signer.address);

			if(isUserFreePurchaseWhitelistWithoutWlBox || isUserEarlyAccessWhitelist) {
				return await useMintForGenOneIfSignerInWl(
					contractGen,
					merkleTreeDataFree.merkleProof,
					merkleTreeDataDiscount.merkleProof,
					NOT_WL_BOX_ID,
					dispatch
				);
			}

			const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();
			return await contractGen.mint(
				merkleTreeDataFree.merkleProof,
				merkleTreeDataDiscount.merkleProof,
				NOT_WL_BOX_ID,
				{
					value: publicSalePrice
				});
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const handleVerification = async (e: any) => {
		const targetValue = Number(e.target.value);

		if (isNaN(targetValue)) {
			setErrorMsg('* ID should be only a number');
			return;
		}

		try {
			const signer = await CflatsSigner.getSigner();
			const wlBoxContract = await getWlBoxByGen(1, signer);

			const mintedSupply = await wlBoxContract.mintedSupply();

			if (mintedSupply < targetValue) {
				setErrorMsg('* ID does not exists yet');
				return;
			}

			const ownerOfWl = await wlBoxContract.ownerOf(targetValue);

			if (ownerOfWl.toLowerCase() !== signer.address.toLowerCase()) {
				setErrorMsg('* You are not an ID owner');
				return;
			}
		} catch (e) {
			setErrorMsg('* Connection aborted');
		}

		setErrorMsg('');
	};

	return (
		<FormWrapper>
			<Container>
				<form autoComplete={'off'} onSubmit={handleSubmit(submit)}>
					<Text>
						Dear costumer, we are appreciated for purchasing WL BOX to get an
						opportunity of free mint of GEN#1. Please fill the form bellow:
					</Text>

					<FormElementWrapper>
						<FormElement className={styles.inputWrapper}>
							<Input
								className={styles.inputField}
								{...register('boxId', {
									required: 'Required Field'
								})}
								placeholder='Input WL BOX ID...'
								onChange={async (e: any) => await handleVerification(e)}
							/>
							{errors.boxId && (
								<ErrorMessage>{errors.boxId.message}</ErrorMessage>
							)}
							<ErrorMessage className={styles['wl-box-err']}>{getErrorMsg}</ErrorMessage>
						</FormElement>

						<ModalButton type={'submit'} className={styles.btn}>
							USE WL BOX
						</ModalButton>
					</FormElementWrapper>

					<Text className={styles["wl-box-text"]}>
						If you want to avoid using WL BOX and mint above than one NFT GEN#1,
						please use MINT button bellow.
					</Text>

					<Box className={styles.mintBox}>
						<ModalButton className={styles.__mintBoxBtn} onClick={submitWithoutWlBox}>MINT GEN#1</ModalButton>
					</Box>
				</form>
			</Container>
		</FormWrapper>
	);
};

export default WlForm;
