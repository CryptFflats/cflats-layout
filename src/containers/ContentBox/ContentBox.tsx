'use client'

import { FC, ReactNode } from 'react'
import styles from './ContentBox.module.scss'
import Container from '../Container/Container'
import classNames from 'classnames'

interface ContentBoxProps {
	children?: ReactNode
	paddingTopBig?: boolean
	paddingBottomBig?: boolean
	id?: string
	color?: 'gray' | 'blue'
}

const ContentBox: FC<ContentBoxProps> = ({
	children,
	paddingTopBig,
	paddingBottomBig,
	id,
	color
}) => {
	return (
		<section
			className={classNames(
				styles.contentBox,
				paddingTopBig && styles.topBig,
				paddingBottomBig && styles.bottomBig,
				color === 'gray' && styles.gray,
				color === 'blue' && styles.blue
			)}
			id={id}
		>
			<Container>{children}</Container>
		</section>
	)
}

export default ContentBox
