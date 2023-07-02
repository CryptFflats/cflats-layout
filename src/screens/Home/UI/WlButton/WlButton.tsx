'use client'

import styles from './WlButton.module.scss'
import IcWl from '../../../../assets/images/icons/ic_wl_market.svg'

const WlButton = ({ onClick }: {onClick: () => void}) => {
	return (
		<button onClick={onClick} className={styles.wlButton}>
			<span className={styles.market}>
				<i>
					<IcWl/>
				</i>
				WL Market
			</span>
			<span className={styles.about}>
				Get whitelisted NOW
			</span>
		</button>
	);
};

export default WlButton;


