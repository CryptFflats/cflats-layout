'use client'

import styles from './Form.module.scss'
import { SubmitButton } from './styles';
import { Inputs } from 'preact/compat';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormData } from './types';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import AuthService from '../../../../core/services/Auth.service';
import { AuthContext } from '../../../../core/context/auth-context';
import { useContext } from 'react';
import Cookies from 'js-cookie';

const Form = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormData>()

	const onSubmit: SubmitHandler<IFormData> = async (data) => {
		try {
			// const token = await AuthService.loginIn(data);
			// Cookies.set('token', token)
			//router.push('/admin');
		} catch(err: any) {
		    throw new Error(err)
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

					<SubmitButton onClick={() => signIn('login-in')}>
						Login In
					</SubmitButton>
				</div>
			</form>
		</div>
	);
};

export default Form;