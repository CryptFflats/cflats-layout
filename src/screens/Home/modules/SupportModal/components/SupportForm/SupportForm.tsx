'use client';

import { ErrorMessage, FormWrapper } from './styles';
import { Container, FormElement, Input, InputLabel } from '../SupportModal/styles';
import { useForm } from 'react-hook-form';
import { Box} from '@mui/material';
import { BlueButton } from '../../../../../../styled/BlueButton';
import { ISubmit } from './types';

const SupportForm = () => {
	const { handleSubmit, register, formState: {errors}, reset } = useForm<ISubmit>();

	const submit = (data: ISubmit) => {
		console.log(data);
	};

	return (
		<FormWrapper>
			<Container>
				<form autoComplete={'off'} onSubmit={handleSubmit(submit)}>
					<FormElement>
						<InputLabel>Name</InputLabel>
						<Input {...register('name', {
							required: 'Required Field',
							minLength: {
								value: 2,
								message: 'Min length is 2',
							},
							maxLength: {
								value: 30,
								message: 'Max length is 30',
							},
						})} />
						{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
					</FormElement>

					<FormElement>
						<InputLabel>Email</InputLabel>
						<Input type={'email'} {...register('email', {
							required: 'Required Field',
							pattern: {
								value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
								message: 'Enter a valid email address!',
							},
						})} />
						{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
					</FormElement>

					<FormElement sx={{ marginBottom: '50px' }}>
						<InputLabel>Message</InputLabel>
						<Input  {...register('message', {
							required: 'Required Field',
							minLength: {
								value: 10,
								message: 'Min length is 10',
							},
							maxLength: {
								value: 400,
								message: 'Max length is 400',
							},
						})}
									 multiline
									 sx={{ '.MuiInputBase-input': { minHeight: '100px' } }}
						/>
						{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
					</FormElement>

					<Box sx={{ textAlign: 'center' }}>
						<BlueButton type={'submit'}>SEND MESSAGE</BlueButton>
					</Box>
				</form>
			</Container>
		</FormWrapper>
	);
};

export default SupportForm;