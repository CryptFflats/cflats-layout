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

const WlForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<ISubmit>();

	const dispatch = useAppDispatch();

	const [getErrorMsg, setErrorMsg] = useState('');

	const submit = async (data: ISubmit) => {
		const boxId = data.boxId;
		if (isNaN(Number(boxId))) {
			return;
		}

		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);

		try {
			await contractGen.mint([], [], boxId, {
				value: 0
			});
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const submitWithoutWlBox = async () => {
		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);
		const signerBalanceInEth = await CflatsSigner.getBalance();
		const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();

		if (signerBalanceInEth < publicSalePrice) {
			const formatedBalance = new BigNumber(
				signerBalanceInEth.toString()
			).dividedBy('1e18');
			const formatedPrice = new BigNumber(publicSalePrice.toString()).dividedBy(
				'1e18'
			);
			const errorMsg = `Balance should be at least ${formatedPrice} ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(
				5
			)} ETH`;

			dispatch(setIsMintErrorActive(true));
			dispatch(setErrorMessage(errorMsg));

			throw new Error(errorMsg);
		}

		try {
			await contractGen.mint([], [], 20000, {
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
