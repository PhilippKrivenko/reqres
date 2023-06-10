import React from 'react'

const Authorization = () => {
	return (
		<form>
			<h1>Авторизуйтесь</h1>

			<label for="email">login</label>
			<input
				type="text"
				name="email"
				id="email"
			/>

			<label for="password">password</label>
			<input
				type="text"
				name="password"
				id="password"
			/>
		</form>
	)
}

export default Authorization
