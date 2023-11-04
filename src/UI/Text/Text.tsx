import classNames from 'classnames';
import React from 'react';
import styles from './Text.module.scss';
type Props = {
	className?: string;
	children?: React.ReactNode;
};

export const Text = (props: Props) => {
	const { className, children } = props;
	return <p className={classNames(styles.tokenInfo, className)}>{children}</p>;
};
