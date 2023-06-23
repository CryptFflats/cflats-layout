import styles from './Game.module.scss'
import ContentBox from '../../../../containers/ContentBox/ContentBox'
import classNames from 'classnames'
import CfImage from '../../../../components/CfImage/CfImage'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';

const images = [
	'7c89f2e6-db81-4dd9-2a1b-e9a712410000/public',
	'71cbc4c6-2c36-4314-6384-1c1c3eb94c00/public',
	'd13f4abf-bac2-495e-0d4e-a228108fad00/public',
	'd02255ad-755f-4648-8ecb-987681e47c00/public',
	'a9d85bb2-e88c-4397-f32d-776e6a41e800/public'
]

const Game = () => {
	const t = useTranslations('Home')
	const [indexImg, setIndexImg] = useState(1)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndexImg(prevCount => {
				if (prevCount >= 4) {
					return 0
				} else {
					return prevCount + 1
				}
			})
		}, 700)

		return () => clearInterval(interval)
	}, [])

	return (
		<ContentBox paddingTopBig color={'blue'}>
			<h1 className={styles.title}>{t('game.title')}</h1>

			<p className={styles.subtitle}>{t('game.paragraph')}</p>

			<div className={styles.gamePlace}>
				<CfImage
					src={'3d5931ae-4f27-4bb3-db27-2b498904ef00/public'}
					alt={'game place'}
					draggable={false}
				/>

				<div className={classNames(styles.room, styles['drop5'])}>
					<CfImage
						src={'883715d1-9bf0-4f9f-e71a-95ca70010900/public'}
						alt='drop#5'
						draggable={false}
					/>
					<h1
						className={classNames(
							styles['name-drop'],
							styles['drop-text'],
							styles['name-drop5']
						)}
					>
						GEN#5
					</h1>
					<p
						className={classNames(
							styles['about-drop'],
							styles['about-drop5'],
							styles['drop-text']
						)}
					>
						Secret room
					</p>
				</div>

				<div className={classNames(styles.room, styles['drop3'])}>
					<CfImage
						src={'c578da53-eb75-43be-c9a6-12fd4bd7e500/public'}
						alt='drop#3'
						draggable={false}
					/>
					<h1
						className={classNames(
							styles['name-drop'],
							styles['drop-text'],
							styles['name-drop3']
						)}
					>
						GEN#3
					</h1>
					<p
						className={classNames(
							styles['about-drop'],
							styles['about-drop3'],
							styles['drop-text']
						)}
					>
						Kitchen and Dining room
					</p>
				</div>

				<div className={classNames(styles.room, styles['drop4'])}>
					<CfImage
						src={'d6ae7cb3-0427-4818-2b03-1a45d77fb500/public'}
						alt='drop#4'
						draggable={false}
					/>
					<h1
						className={classNames(
							styles['name-drop'],
							styles['drop-text'],
							styles['name-drop5']
						)}
					>
						GEN#4
					</h1>
					<p
						className={classNames(
							styles['about-drop'],
							styles['about-drop5'],
							styles['drop-text']
						)}
					>
						Playroom
					</p>
				</div>

				<div className={classNames(styles.room, styles['drop2'])}>
					<CfImage
						src={'d2a83e62-9371-4c3c-03cc-06d414959a00/public'}
						alt='drop#2'
						draggable={false}
					/>
					<h1
						className={classNames(
							styles['name-drop'],
							styles['drop-text'],
							styles['name-drop5']
						)}
					>
						GEN#2
					</h1>
					<p
						className={classNames(
							styles['about-drop'],
							styles['about-drop5'],
							styles['drop-text']
						)}
					>
						Bedroom
					</p>
				</div>

				<div className={classNames(styles.room, styles['drop1'])}>
					<CfImage
						src={'6aa432bb-647e-4a59-d8aa-709cd30cdb00/public'}
						alt='drop#1'
						draggable={false}
					/>
					<h1
						className={classNames(
							styles['name-drop'],
							styles['drop-text'],
							styles['name-drop5']
						)}
					>
						GEN#1
					</h1>
					<p
						className={classNames(
							styles['about-drop'],
							styles['about-drop5'],
							styles['drop-text']
						)}
					>
						Living room
					</p>
				</div>
			</div>

			<div className={styles.gameAnimation}>
				{images.map((item, index) => {
					return (
						<CfImage
							key={index}
							src={item}
							alt={'game-img'}
							className={classNames(
								styles.gameAnimationImg,
								indexImg === index && styles.active
							)}
							draggable={false}
							fluid
						/>
					)
				})}
			</div>
		</ContentBox>
	)
}

export default Game
