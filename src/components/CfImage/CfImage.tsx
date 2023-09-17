'use client'

import React, { FC, HTMLAttributes } from 'react'
import styles from './CfImage.module.scss'
import classNames from 'classnames'
import { IMAGE_DELIVERY_URL } from '../../core/utils/constance';
import Image from 'next/image';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
	fluid?: boolean
	src: string
	alt: string
	className?: string
	draggable?: boolean
	onLoad?: () => void
}

const CfImage: FC<ImageProps> = ({
	fluid,
	src,
	alt,
	className,
	draggable,
	onLoad,
	...rest // Для пропсов атрибута 'data'
}) => {
	return (
		<img
			src={IMAGE_DELIVERY_URL + src}
			draggable={draggable}
			alt={alt}
			className={classNames(fluid && styles.fluid, className)}
			onLoad={onLoad}
			{...rest} // Для передачи атрибута 'data'
		/>
	)
}

export const CflatsImage: FC<ImageProps> = ({
	fluid,
	src,
	alt,
	className,
	draggable,
	onLoad,
	...rest
}) => {
	return (
		<img
			src={src}
			draggable={draggable}
			alt={alt}
			className={classNames(fluid && styles.fluid, className)}
			onLoad={onLoad}
			{...rest} // Для передачи атрибута 'data'
		/>
	)
}

export default CfImage;