import { useState, FC } from 'react'
import styles from './Marquee.module.scss'
import CfImage from '../../../../components/CfImage/CfImage'
import { Skeleton } from '@mui/material'

interface MarqueCardProps {
	image: string
}

const MarqueCard: FC<MarqueCardProps> = ({ image }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	return (
		<div className={styles.marqueeCard}>
			<CfImage
				onLoad={() => setIsLoading(false)}
				src={image}
				alt={'nft flat'}
				fluid
				style={{ display: isLoading ? 'none' : '' }}
			/>
			{isLoading && (
				<Skeleton
					variant='rectangular'
					animation='wave'
					width={'100%'}
					height={'100%'}
					style={{ background: '#4d4949' }}
				/>
			)}
		</div>
	)
}

export default MarqueCard
