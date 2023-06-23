import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReqresService from '../../../services/reqres-service'
import { setToken } from '../../../helpers'
import { useForm } from 'react-hook-form'

import './login-page.css'

const LoginForm = ({ onSubmit }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Email:
				<input
					{...register('email', {
						required: 'Поле обязательно к заполнению',
					})}
				/>
			</label>
			<div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>

			<label>
				Password:
				<input {...register('password', { required: true })} />
			</label>
			<div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>

			<label>
				<input type="checkbox" name="rememberMe" id="rememberMe" />
				Remember me
			</label>

			<button type="submit">Register</button>
			<Link to="/register">Register</Link>
		</form>
	)
}

const LoginPage = () => {
	const navigate = useNavigate()
	const { registerUser } = new ReqresService()

	const onSubmit = async data => {
		const res = await registerUser(data)

		setToken(res)
		navigate('/')
	}

	return (
		<div>
			<h1>Login Page</h1>
			<LoginForm onSubmit={onSubmit} />
		</div>
	)
}

export default LoginPage
