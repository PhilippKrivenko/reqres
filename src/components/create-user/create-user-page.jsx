import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserForm } from '../../shared/ui/user-form'

const CreateUserPageContainer = () => {
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()

		const form = event.target
		const newUser = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			avatar: form.avatar.value,
		}



		navigate('/')
	}

	return (
		<main>
			<h1>Create user</h1>
			<form onSubmit={handleSubmit}>
				<UserForm />
				<button type="submit">create</button>
			</form>
		</main>
	)
}

export default CreateUserPageContainer
