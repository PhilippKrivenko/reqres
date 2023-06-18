import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/reqresSlice'
import './login-page.css'

const LoginPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		const form = e.target

		dispatch(
			login({
				email: form.email.value,
				password: form.password.value,
			})
		)

		if (form.rememberMe) {
		}

		navigate('/login')
	}

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input type="text" name="email" id="email" />
				</label>
				<label>
					Password:
					<input type="text" name="password" id="password" />
				</label>
				<label>
					<input
						type="checkbox"
						name="rememberMe"
						id="rememberMe"
					/>
					Remember me
				</label>

				<button type="submit">Login</button>
				<Link to="/register">Register</Link>
			</form>
		</div>
	)
}

export default LoginPage
