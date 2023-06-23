'use client'

import { useState, useEffect } from 'react'
import styles from './ScrollButton.module.scss'
import { RiArrowUpSLine } from 'react-icons/ri'
import classNames from 'classnames'

const ScrollButton = () => {
	const [isButtonVisible, setIsButtonVisible] = useState(false)

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const handleScroll = () => {
		const scrollPosition = window.scrollY

		if (scrollPosition > 400) {
			setIsButtonVisible(true)
		} else {
			setIsButtonVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<button
			onClick={goToTop}
			className={classNames(
				styles['scrollTo-top'],
				isButtonVisible && styles.visible
			)}
		>
			<RiArrowUpSLine size={'30px'} />
		</button>
	)
}

export default ScrollButton
