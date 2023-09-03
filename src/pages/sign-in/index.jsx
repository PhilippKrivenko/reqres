import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '../../features'

export const SignIn = () => {
	return (
		<div>
			<h1>Login</h1>
			<LoginForm />
			<Link to='/register'>Register</Link>
		</div>
	)
}
