import { BlueButton } from '../../../../../../styled/BlueButton';
import { useMint } from '../../hooks/useMint';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';
import { setIsActive, setTxHash } from '../../../../../../core/store/slices/MintSuccess';
import Progress from '../../../../../../components/Progress/Progress';

const MintButton = () => {
	const dispatch = useAppDispatch();
	const { isLoading, mintGen } = useMint();

	const mint = async () => {
		try {
			const tx = await mintGen();
			dispatch(setIsActive(true))
			dispatch(setTxHash(tx.transactionHash))
		} catch(err: any) {
			throw new Error(err);
		}
	}

	return (
		<BlueButton onClick={mint}>
			<i>MINT GEN 1</i>
			{isLoading && <Progress/>}
		</BlueButton>
	);
};

export default MintButton;