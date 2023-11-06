'use client';

import { styled } from '@mui/material/styles';
import Avatar from '../Avatar/Avatar';

export const MyWallet = (props: { onlyIcon?: boolean }) => {
	const { onlyIcon } = props;
	return (
		<FlexBox>
			<Avatar />
			{!onlyIcon && <span>My wallet</span>}
		</FlexBox>
	);
};

export const FlexBox = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '25px',

	'@media (max-width: 1920px)': {
		fontSize: '14px',
		gap: '10px'
	},

	'& > span': {
		color: 'rgb(255, 255, 255)',
		fontWeight: 700,
		fontSize: '14px',

		'@media (max-width: 480px)': {
			fontSize: '12px'
		}
	}
}));
