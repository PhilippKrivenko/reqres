import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReqresService from '../../../services/reqres-service'
import { setToken } from '../../../helpers'
import { useForm } from 'react-hook-form'

const RegisterForm = ({ onSubmit }) => {
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
			<div>{errors.email && <p>{errors.email?.message || 'Error!'}</p>}</div>

			<label>
				Password:
				<input {...register('password', { required: true })} />
			</label>
			<div>{errors.email && <p>{errors.email?.message || 'Error!'}</p>}</div>

			<button type="submit">Register</button>
		</form>
	)
}

const RegisterPage = () => {
	const navigate = useNavigate()
	const { registerUser } = new ReqresService()

	const onSubmit = async data => {
		const res = await registerUser(data)

		setToken(res)
		navigate('/')
	}

	return (
		<div>
			<h1>Register</h1>
			<RegisterForm onSubmit={onSubmit} />
		</div>
	)
}

export default RegisterPage
