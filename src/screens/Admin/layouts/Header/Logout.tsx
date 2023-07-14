'use-client'

import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const Logout = () => {
	return (
		<CustomButton>LOGOUT</CustomButton>
	);
};

export default Logout;

const CustomButton = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.5rem',
	lineHeight: '2rem'
}))