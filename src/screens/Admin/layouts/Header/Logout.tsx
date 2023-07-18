'use client'

import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import AuthService from '../../../../core/services/AuthService/Auth.service';

const Logout = () => {
	const router = useRouter()

	const logOut = () => {
		AuthService.logOut();
		router.push('/');
	}

	return (
		<CustomButton onClick={logOut}>
			LOGOUT
		</CustomButton>
	);
};

export default Logout;

const CustomButton = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'var(--font-nunito)',
	fontSize: '1.5rem',
	lineHeight: '2rem'
}))