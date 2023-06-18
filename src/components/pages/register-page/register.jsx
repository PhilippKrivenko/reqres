import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/reqresSlice'

const RegisterPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		const form = e.target

		console.log({
			email: form.email.value,
			password: form.password.value,
		})

		// dispatch(
		// 	register({
		// 		email: form.email.value,
		// 		password: form.password.value,
		// 	})
		// )

		navigate('/login')
	}

	return (
		<div>
			<h1>Register</h1>

			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input type="text" name="email" id="email" />
				</label>
				<label>
					Password:
					<input type="text" name="password" id="password" />
				</label>

				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default RegisterPage
