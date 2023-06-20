import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReqresService from '../../../services/reqres-service'
import { setToken } from '../../../helpers'

import './login-page.css'

const LoginPage = () => {
	const navigate = useNavigate()
	const { loginUser } = new ReqresService()

	const handleSubmit = () => {
		navigate('/')
	}

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type="text"
						name="email"
						id="email"
						defaultValue="eve.holt@reqres.in"
					/>
				</label>
				<label>
					Password:
					<input
						type="text"
						name="password"
						id="password"
						defaultValue="pistol"
					/>
				</label>
				<label>
					<input type="checkbox" name="rememberMe" id="rememberMe" />
					Remember me
				</label>

				<button type="submit">Login</button>
				<Link to="/register">Register</Link>
			</form>
		</div>
	)
}

export default LoginPage
