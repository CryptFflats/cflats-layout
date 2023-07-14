import { Metadata } from 'next';
import Login from '../../../screens/Login/Login';

export const metadata: Metadata = {
	title: 'Cryptoflats - Login'
}


const LoginPage = () => {
	return (
		<Login />
	);
};

export default LoginPage;