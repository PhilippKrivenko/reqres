import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const UpdateUser = ({ handleSubmit }) => {
	return (
		<div>
			<h1>Update user</h1>

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

const UpdateUserContainer = (users) => {
	const { error, status } = useSelector((state) => state.reqres)
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()

		const form = event.target
		const newUser = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
		}

		if (status === 'pending') {
			return <Spinner />
		}
		if (status === 'rejected') {
			return <ErrorIndicator error={error} />
		}
	}

	return <UpdateUser handleSubmit={handleSubmit} />
}

export default UpdateUserContainer
