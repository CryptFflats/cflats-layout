'use client'

import { ReactNode, useEffect, useState } from 'react';
import AuthService from '../services/AuthService/Auth.service';
import { setIsAdmin, setUser } from '../store/slices/UserSlice';
import Cookies from 'js-cookie';
import { useAppDispatch } from '../hooks/store.hook';
import { useRouter } from 'next/navigation';
import Preload from '../../layouts/Preload/Preload';

const AuthProvider = ({ children } : { children: ReactNode }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const token = localStorage.getItem('rfr-token')
		const checkAuth = async () => {
			try {
				if (!token) return

				const response = await AuthService.checkAuth(token);
				dispatch(setIsAdmin(true));
				dispatch(setUser(response.data.user));
				localStorage.setItem('rfr-token', response.data.refreshToken);
				Cookies.set('ath-token', response.data.accessToken);
			} catch(err: any) {
				router.push('/');
				throw new Error(err);
			} finally {
				setIsLoading(false);
			}
		}

		if (!token) {
			return router.push('/');
		}

		if (token) {
			checkAuth();
		}
	}, []);

	if (isLoading) {
		return <Preload />
	}

	return children;
};

export default AuthProvider;