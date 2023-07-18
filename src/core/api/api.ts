import axios, { AxiosRequestConfig } from 'axios';
import Cookies from "js-cookie";
import AuthService from '../services/AuthService/Auth.service';
import { setIsAdmin, setUser } from '../store/slices/UserSlice';

const API_KEY = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

const $api = axios.create({
	baseURL: `${API_KEY}/api`,
	withCredentials: true
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${Cookies.get('ath-token')}`;
	return config;
});

$api.interceptors.response.use((config) => {
	return config;
},async (error) => {
	const originalRequest = error.config;
	if (error.response.status == 401 && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true;
		try {
			const token = localStorage.getItem('rfr-token') as string;
			const response = await AuthService.checkAuth(token);
			localStorage.setItem('rfr-token', response.data.refreshToken);
			Cookies.set('ath-token', response.data.accessToken);
			return $api.request(originalRequest);
		} catch (e) {
			console.log('auth')
		}
	}
	throw error;
})

export default $api;