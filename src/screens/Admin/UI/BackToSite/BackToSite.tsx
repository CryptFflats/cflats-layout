'use client'

import { styled } from '@mui/material/styles';
import { Button, ButtonBase } from '@mui/material';

const BackToSite = () => {
	return (
		<Link href={'/'}>BACK TO SITE</Link>
	);
};

export default BackToSite;

const Link = styled(Button)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.5rem',
	lineHeight: '2rem',
	color: 'var(--color-gold)',
	padding: '0',
	maxWidth: '299px',
	textTransform: 'uppercase',
	background: 'transparent',
	'&:hover': {
		background: 'transparent',
	}
}))