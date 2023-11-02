'use client';

import { BuyCflatDialog, BuyCflatDialogContent } from './styles';
import Header from '../Header/Header';
import BuyCflatForm from '../BuyCflatForm/BuyCflatForm';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../../../core/hooks/store.hook';
import {
	selectCflatModal,
	setBuyCflatModal
} from '../../../../../../core/store/slices/ModalSlice';

const BuyCflatModal = () => {
	const buyCflatModal = useAppSelector(selectCflatModal);
	const dispatch = useAppDispatch();

	return (
		<BuyCflatDialog
			open={buyCflatModal}
			onClose={() => dispatch(setBuyCflatModal(false))}
		>
			<BuyCflatDialogContent>
				<Header />
				<BuyCflatForm />
			</BuyCflatDialogContent>
		</BuyCflatDialog>
	);
};

export default BuyCflatModal;
