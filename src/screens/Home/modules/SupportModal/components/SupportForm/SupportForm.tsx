'use client'

import { FormWrapper } from './styles';
import { Container, FormElement, Input, InputLabel } from '../SupportModal/styles';
import { useForm } from 'react-hook-form';
import { Box, FormLabel, TextField } from '@mui/material';
import { BlueButton } from '../../../../../../styled/BlueButton';

const SupportForm = () => {
	const { handleSubmit, register } = useForm()

	const submit = () => {

	}

	return (
		<FormWrapper>
			<Container>
				<form autoComplete={"off"} onSubmit={handleSubmit(submit)} >
					<FormElement>
						<InputLabel>Name</InputLabel>
						<Input />
					</FormElement>

					<FormElement>
						<InputLabel>Email</InputLabel>
						<Input />
					</FormElement>

					<FormElement sx={{ marginBottom: '50px' }}>
						<InputLabel>Message</InputLabel>
						<Input multiline sx={{ '.MuiInputBase-input': {minHeight: '100px'} }} />
					</FormElement>

					<Box sx={{ textAlign: 'center' }}>
						<BlueButton>SEND MESSAGE</BlueButton>
					</Box>
				</form>
			</Container>
		</FormWrapper>
	);
};

export default SupportForm;