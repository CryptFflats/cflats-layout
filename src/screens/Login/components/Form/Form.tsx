'use client'

import styles from './Form.module.scss'
import { SubmitButton } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { IAuth } from '../../../../core/services/AuthService/types';
import AuthService from '../../../../core/services/AuthService/Auth.service';
import { useAppDispatch } from '../../../../core/hooks/store.hook';
import { setIsAdmin, setUser } from '../../../../core/store/slices/UserSlice';

const Form = () => {
	const router = useRouter();
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IAuth>()

	const onSubmit: SubmitHandler<IAuth> = async (data: IAuth) => {
		try {
			const response = await AuthService.login(data);
			localStorage.setItem('rfr-token', response.data.refreshToken);
			Cookies.set('ath-token', response.data.accessToken);
			dispatch(setIsAdmin(true));
			dispatch(setUser(response.data.user));
			router.push('/admin');
		} catch(err: any) {
			alert('Wrong Login or Password')
			throw new Error(err);
		}
	}
//
	return (
		<div className={styles.formWrap}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.form}>
					<h1>Authorization</h1>

					<div className={styles.formElem}>
						<label className={styles.label} htmlFor='login_lb'>Login</label>
						<input id='login_lb'
									 className={styles.input}
									 {...register("login", {
										 required: 'Required field'
									 })}
						/>
					</div>

					<div className={styles.formElem}>
						<label className={styles.label} htmlFor='password_lb'>Password</label>
						<input id='password_lb'
									 className={styles.input}
									 type='password'
									 {...register("password", {
										 required: 'Required field'
									 })}
						/>
					</div>

					<SubmitButton type={'submit'}>
						Login In
					</SubmitButton>
				</div>
			</form>
		</div>
	);
};

export default Form;