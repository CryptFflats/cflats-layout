import { $host } from '../api/api';
import Cookies from "js-cookie";

class AuthService {
	loginIn = async (userData: ILoginIn): Promise<string> => {
		try {
			const { data: {token} } = await $host.post('/auth/login', userData);
			//Cookies.set('token', token);

			return token
		} catch(err: any) {
		    throw new Error(err);
		}
	}
}

export default new AuthService();

interface ILoginIn {
	login: string
	password: string
}