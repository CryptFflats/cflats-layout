import { AxiosInstance } from 'axios';
import $api from '../../api/api';
import { IAuth, IAuthResponse } from './types';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

class AuthService {
	 public login = async (data: IAuth): Promise<AxiosResponse<IAuthResponse>> => {
		return await $api.post('auth/login', data);
	}

	public register = async (data: IAuth): Promise<AxiosResponse<IAuthResponse>> => {
		return await $api.post('auth/register', data);
	}

	public logOut = () => {
		 localStorage.removeItem('rfr-token');
		 Cookies.remove('ath-token');
	}

	public checkAuth = async (refreshToken: string): Promise<AxiosResponse<IAuthResponse>> => {
		return await $api.post('auth/login/access-token', { refreshToken });
	}
}

export default new AuthService();