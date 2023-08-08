'use client'

import classNames from 'classnames'
import styles from './MintScreen.module.scss'
import CfImage from '../../../../components/CfImage/CfImage'
import { useAppDispatch } from '../../../../core/hooks/store.hook'
import { setGenFirst, setGenZero } from '../../../../core/store/slices/MintSlice';
import { RoomsButton } from '../../../../styled/BlueButton';
import { MintZeroGen } from '../../modules/MintZeroGen';
import MintFirstGen from '../../modules/MintFirstGen/components/MintFirstGen/MintFirstGen';

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

				{/*<WlButton onClick={() => dispatch(setWhileList(true))} />*/}
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
					src={'ec7743b5-60fb-4395-c596-e0d92f227900/public'} // ec7743b5-60fb-4395-c596-e0d92f227900 &&134082ea-e540-41e3-3e3e-6309813a7a00
					alt='chess'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles.desktop)}>
				<CfImage
					src={'6ccd65ef-082b-4885-eaf5-ddbac1cba900/cover'}
					alt='Desktop'
				/>
			</div>

			<div className={classNames(styles['dec-anim'], styles.secTable)}>
				<CfImage
					src={'5cbf15e0-116e-4ff3-d6b7-2028f66b9900/cover'}
					alt='second table'
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
			{/*<WlMarket />*/}
		</div>
	)
}

export default AboutNft
