'use client'

import { FC, forwardRef, ForwardRefRenderFunction } from 'react';
import styles from './LineInput.module.scss';

interface LineInputProps {}

const LineInput: ForwardRefRenderFunction<HTMLInputElement, LineInputProps> = (
	{ ...rest },
	ref
) => {
	return (
		<input
			className={styles.lineInput}
			ref={ref}
			{...rest}
		/>
	);
};

export default forwardRef(LineInput);
