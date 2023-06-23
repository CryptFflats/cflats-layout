'use client';

import styles from './WlMarket.module.scss';
import VideoPlayer from '../../../../../../components/VideoPlayer/VideoPlayer';
import { useAppDispatch, useAppSelector } from '../../../../../../core/hooks/store.hook';
import IcWl from '../../../../../../assets/images/icons/ic_bigeer_wl.svg'
import { useTranslations } from 'next-intl';
import { BlueButton } from '../../../../../../styled/BlueButton';
import IcClose from '../../../../../../assets/images/icons/ic_close_white.svg'
import { ButtonBase } from '@mui/material';
import { setWhileList } from '../../../../../../core/store/slices/MintSlice';
import { CDN_URL } from '../../../../../../core/utils/constance';

const WlMarket = () => {
	const { wlPlace } = useAppSelector(state => state.MintSlice);
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const t = useTranslations("Home");
	const dispatch = useAppDispatch();

	const onClose = () => {
		dispatch(setWhileList(false));
	}

	return (
		<>
			{
				wlPlace ? (
						<div className={styles.wlPlace}>
							<VideoPlayer>
								<source src={`${CDN_URL}/videos/keyBackgrpound.mp4`} />
							</VideoPlayer>

							<div className={styles.bg}>
								<ButtonBase
									onClick={onClose}
									sx={{ position: 'absolute', color: '#fff' }}
									className={styles.close}
								>
									<IcClose />
								</ButtonBase>

								<div className={styles.content}>
									<span className={styles.wlMarket}>
										<i><IcWl/></i>
										<i>WL Market</i>
									</span>

									<p dangerouslySetInnerHTML={{ __html: t.raw('mint.wlMarket.text') }} />

									<BlueButton
										href={'https://wl.market/collections/cryptoflats?type=sell'}
										//@ts-ignore
										target={'_blank'}
									>
										{t('mint.wlMarket.button')}
									</BlueButton>
								</div>
							</div>
						</div>
					)
					: null
			}
		</>
	);
};

export default WlMarket;