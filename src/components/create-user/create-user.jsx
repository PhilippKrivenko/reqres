import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../store/actions'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const CreateUser = ({ handleSubmit }) => {
	return (
		<div>
			<h1>Create user</h1>

			<form onSubmit={handleSubmit}>
				<label>
					first name: <input type="text" name="firstName" id="firstName" />
				</label>
				<label>
					last name: <input type="text" name="lastName" id="lastName" />
				</label>

				<button type="submit">Create</button>
			</form>
		</div>
	)
}

const CreateUserContainer = () => {
	const { error, status } = useSelector((state) => state.reqres)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()

		const form = event.target
		const newUser = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
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

	return <CreateUser handleSubmit={handleSubmit} />
}

export default CreateUserContainer
