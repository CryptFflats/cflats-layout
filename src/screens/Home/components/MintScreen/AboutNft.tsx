'use client'

import classNames from 'classnames'
import styles from './MintScreen.module.scss'
import CfImage from '../../../../components/CfImage/CfImage'
import { useAppDispatch } from '../../../../core/hooks/store.hook'
import { setGenFirst, setGenZero, setWhileList } from '../../../../core/store/slices/MintSlice';
import WlButton from '../../UI/WlButton/WlButton';
import { BlueButton, RoomsButton } from '../../../../styled/BlueButton';
import { MintZeroGen } from '../../modules/MintZeroGen';
import MintFirstGen from '../../modules/MintFirstGen/components/MintFirstGen/MintFirstGen';
import { WlMarket } from '../../modules/WlMarket';

const AboutNft = () => {
	const dispatch = useAppDispatch()

	return (
		<div className={classNames(styles.aboutNft)}>
			<div className={styles.mintButtons}>
				<RoomsButton
					onClick={() => dispatch(setGenFirst(true))}
				>
					MINT GEN 1
				</RoomsButton>

				<RoomsButton
					onClick={() => dispatch(setGenZero(true))}
				>
					MINT NFT PASS
				</RoomsButton>

				<WlButton onClick={() => dispatch(setWhileList(true))} />
			</div>

			<div className={classNames(styles['dec-anim'], styles.sofa)}>
				<CfImage
					src={'90ce80c2-5f46-44fa-7cce-bbc4bb34b500/public'}
					alt='sofa'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles.armchair)}>
				<CfImage
					src={'4e8ab61a-6ead-46fd-da82-cd5469f6fe00/public'}
					alt='armchair'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles.chess)}>
				<CfImage
					src={'134082ea-e540-41e3-3e3e-6309813a7a00/public'}
					alt='chess'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles['diamond-card'])}>
				<CfImage
					src={'9358ed91-b38c-4316-205a-deba3ec19200/public'}
					alt='diamond-card'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles['gold-card'])}>
				<CfImage
					src={'c02db6b9-3f49-47bf-dd82-cfeca6073e00/public'}
					alt='gold-card'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles.table)}>
				<CfImage
					src={'368ff9c8-696e-44a9-22e3-a186237be000/public'}
					alt='table'
				/>
			</div>

			{/*<MintFirstGen />*/}
			{/*<MintNftPass />*/}
			<MintZeroGen />
			<MintFirstGen />
			<WlMarket />
		</div>
	)
}

export default AboutNft
