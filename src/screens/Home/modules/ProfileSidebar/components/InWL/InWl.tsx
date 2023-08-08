"use client"

import styles from './InWl.module.scss'
import { FC } from 'react';
import IcNotWl from '../../../../../../assets/images/icons/ic_no_wl.svg'
import IcInWl from '../../../../../../assets/images/icons/ic_in_wl.svg'
import IcNotWlSmall from '../../../../../../assets/images/icons/ic_no_wl_small.svg'
import IcInWlSmall from '../../../../../../assets/images/icons/ic_in_wl_small.svg'
import classNames from 'classnames';
import { useMediaQuery } from '@mui/material';

interface InWlProps {
	inFree: boolean
	inDiscount: boolean
}

const InWl: FC<InWlProps> = ({ inFree, inDiscount }) => {
	const query = useMediaQuery('(min-width: 768px)')

	return (
		<div className={styles.wlBar}>
			<div className={classNames(styles.wlItem, inFree && styles.inWl)}>
				{ inFree && <>{!query ? <IcInWlSmall /> : <IcInWl/>}</> }
				{ !inFree && <>{!query ? <IcNotWlSmall /> : <IcNotWl/>}</> }
				<i>Whitelist FREE</i>
			</div>
			<div className={classNames(styles.wlItem, inDiscount && styles.inWl)}>
				{ inDiscount && <>{!query ? <IcInWlSmall /> : <IcInWl/>}</> }
				{ !inDiscount && <>{!query ? <IcNotWlSmall /> : <IcNotWl/>}</> }
				<i>Whitelist discount 30%</i>
			</div>
		</div>
	);
};

export default InWl;