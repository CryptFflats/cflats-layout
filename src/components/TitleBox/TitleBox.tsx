'use client'

import { FC } from 'react'
import { LineAnimProps, TitleBoxProps, TitleProps } from './types'
import styles from './TitleBox.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion';
import { lineAppearance } from '../../core/utils/animations/lineAppearance';


const TitleBox: FC<TitleBoxProps> & { Title: FC<TitleProps> } & {
	LineAnim: FC<LineAnimProps>
} = ({ className, children }) => {
	return <div className={classNames(styles.titleBox, className)}>{children}</div>
}

TitleBox.Title = ({ children }) => <h1>{children}</h1>

TitleBox.LineAnim = ({ className }) => (
	<div className={classNames(styles.animBox, className)}>
		<div className={styles.circle}></div>
		<motion.div
			className={styles.lineAnim}
			initial={'hidden'}
			whileInView='show'
			variants={lineAppearance}
			viewport={{ once: true, amount: 0.5 }}
		/>
	</div>
)

export default TitleBox
