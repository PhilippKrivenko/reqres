import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './login-page.css'

const LoginPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const fromPage = location.state?.from?.pathname || '/'

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<label>
					Email: <input type="text" name="email" id="email" />
				</label>
				<label>
					Password: <input type="text" name="password" id="password" />
				</label>

				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default LoginPage
