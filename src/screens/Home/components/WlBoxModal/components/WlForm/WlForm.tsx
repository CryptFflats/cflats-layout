'use client';

import { ErrorMessage, FormWrapper } from './styles';
import {
	Container,
	FormElement,
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
import { setErrorMessage, setIsMintErrorActive } from 'core/store/slices/MintError';

const WlForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<ISubmit>();

	const dispatch = useAppDispatch();

	const submit = async (data: ISubmit) => {
		const boxId = data.boxId;
		if (isNaN(Number(boxId))) {
			return;
		}

		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);
		const signerBalanceInEth = await CflatsSigner.getBalance();

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
		
		if(signerBalanceInEth < publicSalePrice) {
			const formatedBalance = (new BigNumber(signerBalanceInEth.toString())).dividedBy('1e18');
			const errorMsg = `Balance should be at least 0.015 ETH to buy GEN#0. Current balance ${formatedBalance.toFormat(5)} ETH`;
			
			dispatch(setIsMintErrorActive(true))
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
	}

	return (
		<FormWrapper>
			<Container>
				<form autoComplete={'off'} onSubmit={handleSubmit(submit)}>
					<FormElement>
						<InputLabel>Whitelist Box ID</InputLabel>
						<Input
							{...register('boxId', {
								required: 'Required Field'
							})}
							placeholder='Input your WL Box ID...'
						/>
						{errors.boxId && (
							<ErrorMessage>{errors.boxId.message}</ErrorMessage>
						)}
					</FormElement>

					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<BlueButton type={'submit'}>USE WL BOX</BlueButton>
						<TextButton >MINT WITHOUT USING WL BOX</TextButton>
					</Box>
				</form>
			</Container>
		</FormWrapper>
	);
};

export default WlForm;
