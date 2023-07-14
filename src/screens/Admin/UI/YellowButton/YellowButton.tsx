'use client'

import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase, SxProps } from '@mui/material';


interface YellowButtonProps {
	children?: ReactNode
	onClick?: () => void
	sx?: SxProps
	type?: 'submit' | 'button'
}

const YellowButton: FC<YellowButtonProps> = ({ children, onClick, sx, type }) => {
	return (
		<Button type={type} sx={sx} onClick={onClick}>
			{children}
		</Button>
	);
};

export default YellowButton;

const Button = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.5rem',
	lineHeight: '2rem',
	color: 'var(--color-gold)',
	padding: '0',
	maxWidth: '299px',
	textTransform: 'uppercase'
}))