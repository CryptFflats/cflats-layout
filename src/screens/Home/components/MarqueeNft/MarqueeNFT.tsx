import styles from './Marquee.module.scss'
import { dataMarquee1, dataMarquee2, dataMarquee3 } from './Marquee.data'
import Marquee from 'react-fast-marquee'
import MarqueCard from './MarqueCard'

const MarqueeNFT = () => {
	return (
		<section className={styles.marqueCards}>
			<Marquee
				gradient={false}
				speed={10}
				direction={'right'}
				pauseOnHover={true}
			>
				{dataMarquee1.map((item, index) => {
					return <MarqueCard key={index} image={item.img} />
				})}
			</Marquee>

			<Marquee
				gradient={false}
				speed={10}
				direction={'left'}
				pauseOnHover={true}
			>
				{dataMarquee2.map((item, index) => {
					return (
						<div className={styles.marqueeCard} key={index}>
							<MarqueCard key={index} image={item.img} />
						</div>
					)
				})}
			</Marquee>

			<Marquee
				gradient={false}
				speed={10}
				direction={'right'}
				pauseOnHover={true}
			>
				{dataMarquee3.map((item, index) => {
					return (
						<div className={styles.marqueeCard} key={index}>
							<MarqueCard key={index} image={item.img} />
						</div>
					)
				})}
			</Marquee>
		</section>
	)
}

export default MarqueeNFT
