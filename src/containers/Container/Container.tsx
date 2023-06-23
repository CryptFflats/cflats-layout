'use client'

import { FC, ReactNode } from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

interface ContainerProps {
	children?: ReactNode
	className?: string
	style?: any
}

const Container: FC<ContainerProps> = ({ children, className, style }) => {
	return (
		<div style={style} className={classNames(styles.container, className)}>
			{children}
		</div>
	)
}

export default Container
