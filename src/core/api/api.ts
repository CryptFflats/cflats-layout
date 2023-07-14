import axios from 'axios';
import Cookies from "js-cookie";

const API_KEY = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
export const $host = axios.create({
	baseURL: `${API_KEY}/api`,
	headers: {
		"Content-Type": "application/json",
		Authorization: Cookies.get("token") ? `Bearer ${Cookies.get("token")}` : "",
		withCredentials: true,
	},
});