'use client';


import { styled } from '@mui/material/styles';
import Avatar from '../Avatar/Avatar';

export const MyWallet = (props: {
	onlyIcon?: boolean;
	textClassName?: string;
}) => {
	const { onlyIcon, textClassName } = props;
	return (
		<FlexBox>
			<Avatar />
			{!onlyIcon && <span className={textClassName}>My wallet</span>}
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

	'& > span:nth-child(1)': {
		marginRight: 15,
		width: 35,
		height: 35,
		color: 'rgb(255, 255, 255)',
		fontWeight: 700,
		fontSize: '14px',
		border: '2px solid #fff',

		'@media (max-width: 480px)': {
			fontSize: '12px'
		}
	},

	'& > span:nth-child(2)': {
		fontWeight: 700,
		fontSize: '14px',
	}

	
}));
