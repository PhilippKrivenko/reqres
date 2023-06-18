import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../../store/reqresSlice'
import ErrorIndicator from '../../error-indicator'
import Spinner from '../../spinner'

const CreateUserPage = ({ handleSubmit }) => {
	return (
		<div>
			<h1>Create user</h1>
			<form onSubmit={handleSubmit}>
				<label>
					first name:
					<input type="text" name="firstName" id="firstName" />
				</label>
				<label>
					last name:
					<input type="text" name="lastName" id="lastName" />
				</label>
				<label>
					email:
					<input type="text" name="email" id="email" />
				</label>
				<label>
					avatar:
					<input type="text" name="avatar" id="avatar" />
				</label>

				<button type="submit">done</button>
			</form>
		</div>
	)
}

const CreateUserPageContainer = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { error, status } = useSelector((state) => state.reqres)

	const handleSubmit = (e) => {
		e.preventDefault()

		const form = e.target
		const newUser = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			avatar: form.avatar.value,
		}

		dispatch(createUser(newUser))

		if (status === 'pending') {
			return <Spinner />
		}
		if (status === 'rejected') {
			return <ErrorIndicator error={error} />
		}
		navigate('/')
	}

	return <CreateUserPage handleSubmit={handleSubmit} />
}

export default CreateUserPageContainer
