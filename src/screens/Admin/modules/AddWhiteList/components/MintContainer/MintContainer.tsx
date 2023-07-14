'use client'

import styles from './MintContainer.module.scss'
import { ReactNode } from 'react';

const MintContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.mintContainer}>
			{children}
		</div>
	);
};

export default MintContainer;