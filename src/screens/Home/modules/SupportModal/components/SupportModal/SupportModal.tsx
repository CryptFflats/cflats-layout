'use client'

import { useState } from 'react';
import { Dialog } from '@mui/material';
import { SupportDialog, SupportDialogContent } from './styles';
import * as process from 'process';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import SupportForm from '../SupportForm/SupportForm';

const SupportModal = () => {
	const { handleSubmit, register } = useForm()
	const [open, setOpen] = useState<boolean>(true);

	const handleChange = (value: any) => {
		console.log(value)
	}

	const onSubmit = (data: any) => {

	}

	return (
		<SupportDialog open={open} onClose={() => setOpen(false)}>
			<SupportDialogContent>
				<Header />
				<SupportForm />
			</SupportDialogContent>
		</SupportDialog>
	);
};

export default SupportModal;