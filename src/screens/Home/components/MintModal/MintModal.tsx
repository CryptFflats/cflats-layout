import Dialog from '../../../../components/Dialog/Dialog';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/store.hook';
import { setIsActive } from '../../../../core/store/slices/MintSuccess';
import { setIsMintErrorActive } from '../../../../core/store/slices/MintError';

const MintModal = () => {
	const { isActive, txHash } = useAppSelector(state => state.MintSuccess);
	const { isMintErrorActive, errorMessage } = useAppSelector(state => state.MintError);
	const dispatch = useAppDispatch();

	const generateMessage = () => {
		if(isActive === true){
			return (
				<Dialog onClose={() => dispatch(setIsActive(false))} open={isActive}>
					Transaction Success!
					<br />
					<a
						target={'_blank'}
						href={`https://etherscan.io/tx/${txHash}`}
					>
						View Transaction Details
					</a>
				</Dialog>
			)
		}
		else if (isMintErrorActive === true){
			return (
				<Dialog onClose={() => dispatch(setIsMintErrorActive(false))} open={isMintErrorActive}>
					<span>{errorMessage}</span>
				</Dialog>
			)
		}
	}

	return generateMessage();
};

export default MintModal;