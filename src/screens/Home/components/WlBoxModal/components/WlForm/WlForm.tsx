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

const WlForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<ISubmit>();

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
						<TextButton>MINT WITHOUT USING WL BOX</TextButton>
					</Box>
				</form>
			</Container>
		</FormWrapper>
	);
};

export default WlForm;
