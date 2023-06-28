'use client';

import styles from './MintFirstGen.module.scss';
import MintPlace from '../../../../components/MintPlace/MintPlace';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../../../core/hooks/store.hook';
import { setGenFirst } from '../../../../../../core/store/slices/MintSlice';
import CfImage from '../../../../../../components/CfImage/CfImage';
import { useTranslations } from 'next-intl';
import MintButton from '../MintButton/MintButton';
import { useMediaQuery } from '@mui/material';

const MintFirstGen = () => {
	const { genFirstPlace } = useAppSelector(state => state.MintSlice);
	const dispatch = useAppDispatch();
	const t = useTranslations('Home');
	const query = useMediaQuery('(max-width: 600px)');

	return (
		<MintPlace
			onClose={() => dispatch(setGenFirst(false))}
			open={genFirstPlace}
		>
			<CfImage
				className={styles.image}
				src={'fb86448c-7c18-470b-2cdd-515a45862e00/public'}
				alt={'gen1 image'}
				fluid
			/>

			{
				query ? (
						<p dangerouslySetInnerHTML={{ __html: t.raw('mint.gen_first.textMobile') }} />
					)
					:
					(
						<p dangerouslySetInnerHTML={{ __html: t.raw('mint.gen_first.text') }} />
					)
			}

			<MintButton />
		</MintPlace>
	);
};

export default MintFirstGen;
