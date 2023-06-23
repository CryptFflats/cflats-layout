'use client'

import { FC } from 'react'
import { LineAnimProps, TitleBoxProps, TitleProps } from './types'
import './TitleBox.scss'
import classNames from 'classnames'

const TitleBox: FC<TitleBoxProps> & { Title: FC<TitleProps> } & {
	LineAnim: FC<LineAnimProps>
} = ({ className, children }) => {
	return <div className={classNames('titleBox', className)}>{children}</div>
}

TitleBox.Title = ({ children }) => <h1>{children}</h1>

TitleBox.LineAnim = ({ className }) => (
	<div
		data-aos={'titleAnimation'}
		className={classNames('lineAnim', className)}
	></div>
)

export default TitleBox
