'use client'

import styles from './MintZeroGen.module.scss'
import MintPlace from '../../../../components/MintPlace/MintPlace';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../../../core/hooks/store.hook'
import { setGenZero } from '../../../../../../core/store/slices/MintSlice'
import CfImage from '../../../../../../components/CfImage/CfImage'
import { useTranslations } from 'next-intl';
import MintButton from '../MintButton/MintButton';

const MintZeroGen = () => {
	const { genZeroPlace } = useAppSelector(state => state.MintSlice)
	const dispatch = useAppDispatch()
	const t = useTranslations("Home")

	return (
		<MintPlace onClose={() => dispatch(setGenZero(false))} open={genZeroPlace}>
			<CfImage
				className={styles.image}
				src={'fe3c3404-d2bd-4628-feb8-adf3f19cfb00/public'}
				alt={'gen0 image'}
				fluid
			/>

			<p dangerouslySetInnerHTML={{ __html: t.raw('mint.gen_zero.text') }} />

			<MintButton />
		</MintPlace>
	)
}

export default MintZeroGen
