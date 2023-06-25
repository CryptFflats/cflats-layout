import Dialog from '../../../../components/Dialog/Dialog';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { setIsActive } from '../../../../core/store/slices/MintSuccess';

const MintModal = () => {
	const { isActive, txHash } = useAppSelector(state => state.MintSuccess);
	const dispatch = useAppDispatch();

	return (
		<Dialog onClose={() => dispatch(setIsActive(false))} open={isActive}>
			Transaction Success!
			<br />
			<a
				target={'_blank'}
				href={`https://bscscan.com/tx/${txHash}`}
			>
				View Transaction Details
			</a>
		</Dialog>
	);
};

export default MintModal;