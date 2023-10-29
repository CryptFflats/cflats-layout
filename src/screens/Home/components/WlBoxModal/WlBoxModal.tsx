import { useRef, useState } from 'react';
import Dialog from '../../../../components/Dialog/Dialog';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../core/hooks/store.hook';
import {
	setIsWlBoxActive,
	setWlBoxId
} from '../../../../core/store/slices/WlBoxSlices';
import styles from './WlBoxModal.module.scss';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import {
	getNftContract,
	getWlBoxByGen
} from 'core/utils/contract/utils/contracts';

const WlBoxModal = () => {
	const { isWlBoxActive, wlBoxId } = useAppSelector(state => state.WlBoxSlices);
	const dispatch = useAppDispatch();

	const inputRef = useRef(null);
	let [getDisplayStyles, setDisplayStyles] = useState('');

	const handleClick = async (event: any) => {
		// @ts-ignore
		const value = inputRef.current === null ? 2000 : inputRef.current.value;

		if (isNaN(Number(value))) {
			return;
		}

		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);

		try {
			await contractGen.mint([], [], value, {
				value: 0
			});
		} catch (e: any) {
			throw new Error(e);
		}

		dispatch(setIsWlBoxActive(false));
	};

	const handleMintWithoutWlBox = async (event: any) => {
		const signer = await CflatsSigner.getSigner();
		const contractGen = await getNftContract(1, signer);
		const publicSalePrice = await contractGen.PUBLIC_SALE_PRICE();

		try {
			await contractGen.mint([], [], 20000, {
				value: 0
			});
		} catch (e: any) {
			throw new Error(e);
		}

		dispatch(setIsWlBoxActive(false));
	};

	const handleChange = (e: any) => {
		// @ts-ignore
		const value = inputRef.current === null ? 2000 : inputRef.current.value;

		if (isNaN(Number(value))) {
			console.log('here');
			setDisplayStyles(`${styles.displayBlock}`);
		} else {
			setDisplayStyles('');
		}
	};

	return (
		<Dialog
			onClose={() => dispatch(setIsWlBoxActive(false))}
			open={isWlBoxActive}
		>
			Input id of Whitelist Box
			<br />
			<span className={`${styles.errorText} ${getDisplayStyles}`}>
				Id should be a number
			</span>
			<br />
			<input
				onChange={handleChange}
				ref={inputRef}
				className={styles.wlBoxInput}
				type={'text'}
				placeholder={'Input your WL Box id...'}
			/>
			<br />
			<button
				className={`${styles.wlBoxBtn} ${styles.wlMt}`}
				onClick={async (e: any) => handleClick(e)}
			>
				USE WL BOX
			</button>
			<button
				className={`${styles.wlBoxBtn} ${styles.withoutWl}`}
				onClick={async (e: any) => handleMintWithoutWlBox(e)}
			>
				MINT WITHOUT WL BOX
			</button>
		</Dialog>
	);
};

export default WlBoxModal;
