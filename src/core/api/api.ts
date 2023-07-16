import axios, { AxiosRequestConfig } from 'axios';
import Cookies from "js-cookie";

const API_KEY = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

const $api = axios.create({
	baseURL: `${API_KEY}/api`,
	withCredentials: true
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

export default $api;