import React from 'react'

export const Form = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				first name:
				<input type='text' name='firstName' id='firstName' />
			</label>
			<label>
				last name:
				<input type='text' name='lastName' id='lastName' />
			</label>
			<label>
				email:
				<input type='text' name='email' id='email' />
			</label>
			<label>
				avatar:
				<input type='text' name='avatar' id='avatar' />
			</label>

			<input type='submit' />
		</form>
	)
}
