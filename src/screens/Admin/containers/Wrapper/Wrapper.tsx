'use client'

import styles from './Wrapper.module.scss';
import Container from '../../../../containers/Container/Container';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface WrapperProps {
	children: ReactNode
	background: 'gray' | 'gray-light'
	className?: string
}

const Wrapper: FC<WrapperProps> = ({ children, background, className }) => {
	return (
		<div className={
			classNames(styles.wrapper,
			background === 'gray' && styles.gray,
			background === 'gray-light' && styles.grayLight
		)
		}>
			<Container>
				{children}
			</Container>
		</div>
	);
};

export default Wrapper;