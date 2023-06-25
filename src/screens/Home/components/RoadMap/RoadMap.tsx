import styles from './RoadMap.module.scss'
import ContentBox from '../../../../containers/ContentBox/ContentBox'
import TitleBox from '../../../../components/TitleBox/TitleBox'
import React, { useState } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl';

const RoadMap = () => {
	const [heightEl, setHeightEl] = useState<number>(-1)
	const elRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
	const t = useTranslations('Home')
	const accodionData = [
		{ key: "20%", arr: ['n1', 'n2', 'n3', 'n4', 'n5'] },
		{ key: "40%", arr: ['n1', 'n2', 'n3'] },
		{ key: "60%", arr: ['n1', 'n2', 'n3', 'n4'] },
		{ key: "80%", arr: ['n1', 'n2', 'n3', 'n4'] },
		{ key: "100%", arr: ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7'] },
	]

	const toggleAccordion = (index: any) => {
		setHeightEl(index)
	}

	return (
		<ContentBox id={'roadmap'}>
			<TitleBox className={styles.animBox}>
				<TitleBox.Title>{t('roadmap.title')}</TitleBox.Title>
				<TitleBox.LineAnim className={styles.lineAnim} />
			</TitleBox>

			<div className={styles.roadmapCards}>
				{accodionData.map((item, index) => {
					return (
						<div
							className={classNames(styles.roadmapCard, styles[t(`roadmap.accordion.${item.key}.class`)])}
							onClick={() => toggleAccordion(index)}
							key={index}
						>
							<div className={styles.roadmapHeader}>
								<div className={styles.progress}>{t(`roadmap.accordion.${item.key}.progress`)}</div>

								<h2 className={classNames(styles.roadmapCardTitle)}>
									{t(`roadmap.accordion.${item.key}.headerTitle`)}
								</h2>
							</div>

							<div
								ref={elRef}
								style={{
									maxHeight:
										heightEl === index ? `${elRef.current.scrollHeight}px` : 0
								}}
								className={styles.roadmapBody}
							>
								<h2
									className={classNames(
										styles.roadmapBodyTitle,
										styles[t(`roadmap.accordion.${item.key}.classTitle`)]
									)}
								>
									{t(`roadmap.accordion.${item.key}.titleBody`)}
								</h2>

								<ul className={styles.roadmapCardList}>
									{item.arr.map((list, index) => {
										return <li key={index}>{t(`roadmap.accordion.${item.key}.listText.${list}`)}</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</ContentBox>
	)
}

export default RoadMap
