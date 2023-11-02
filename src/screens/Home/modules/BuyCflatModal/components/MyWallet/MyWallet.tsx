'use client';

import { styled } from '@mui/material/styles';
import Avatar from '../../../../../../UI/Avatar/Avatar';

const MyWallet = (props: { onlyIcon?: boolean }) => {
	const { onlyIcon } = props;
	return (
		<FlexBox>
			<Avatar />
			{!onlyIcon && <span>My wallet</span>}
		</FlexBox>
	);
};

export default MyWallet;

export const FlexBox = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '25px',
	'& > span': {
		color: 'rgb(255, 255, 255)',
		fontWeight: 700
	}
}));
