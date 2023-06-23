'use client'

import MintPlace from '../../../../components/MintPlace/MintPlace';
import {
	useAppDispatch,
	useAppSelector
} from '../../../../../../core/hooks/store.hook'
import { setGenFirst } from '../../../../../../core/store/slices/MintSlice'
import CfImage from '../../../../../../components/CfImage/CfImage'
import { BlueButton } from '../../../../../../styled/BlueButton';
import { useTranslations } from 'next-intl';

const MintFirstGen = () => {
	const { genFirstPlace } = useAppSelector(state => state.MintSlice)
	const dispatch = useAppDispatch()
	const t = useTranslations('Home')

	return (
		<MintPlace
			onClose={() => dispatch(setGenFirst(false))}
			open={genFirstPlace}
		>
			<CfImage
				src={'fb86448c-7c18-470b-2cdd-515a45862e00/public'}
				alt={'gen1 image'}
				fluid
			/>

			<p dangerouslySetInnerHTML={{ __html: t.raw('mint.gen_first.text') }} />

			<BlueButton>MINT GEN 1</BlueButton>
		</MintPlace>
	)
}

export default MintFirstGen
