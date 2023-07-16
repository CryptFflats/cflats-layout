import { AxiosInstance } from 'axios';
import $api from '../../api/api';
import { IAuth, IAuthResponse } from './types';
import { AxiosResponse } from 'axios';

class AuthService {
	 public login = async (data: IAuth): Promise<AxiosResponse<IAuthResponse>> => {
		return await $api.post('auth/login', data);
	}

	public register = async (data: IAuth): Promise<AxiosResponse<IAuthResponse>> => {
		return await $api.post('auth/register', data);
	}

	public logOut = () => {
		 localStorage.removeItem('token')
	}
}

export default new AuthService();