import {
	useAppDispatch,
	useAppSelector
} from '../../../../../../core/hooks/store.hook';
import { WlBoxDialog, WlBoxDialogContent } from './styles';
import { selectWlBoxModal, setWlBoxModal } from 'core/store/slices/ModalSlice';
import Header from '../Header/Header';
import WlForm from '../WlForm/WlForm';

export const WlBoxModal = () => {
	const wlBoxModal = useAppSelector(selectWlBoxModal);
	const dispatch = useAppDispatch();

	const handleClose = () => dispatch(setWlBoxModal(false));

	return (
		<WlBoxDialog open={wlBoxModal} onClose={handleClose}>
			<WlBoxDialogContent>
				<Header />
				<WlForm />
			</WlBoxDialogContent>
		</WlBoxDialog>
	);
};

export default WlBoxModal;
