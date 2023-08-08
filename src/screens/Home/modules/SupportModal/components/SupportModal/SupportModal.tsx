'use client'

import { SupportDialog, SupportDialogContent } from './styles';
import Header from '../Header/Header';
import SupportForm from '../SupportForm/SupportForm';
import { useAppDispatch, useAppSelector } from '../../../../../../core/hooks/store.hook';
import { setSupportModal } from '../../../../../../core/store/slices/ModalSlice';

const SupportModal = () => {
	const { supportModal } = useAppSelector(state => state.ModalSlice);
	const dispatch = useAppDispatch()

	return (
		<SupportDialog open={supportModal} onClose={() => dispatch(setSupportModal(false))}>
			<SupportDialogContent>
				<Header />
				<SupportForm />
			</SupportDialogContent>
		</SupportDialog>
	);
};

export default SupportModal;