import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../../shared'
import { getFormData } from '../lib'
import { Form } from './form'

export const UpdateUserForm = () => {
	const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault()

		const updatedUser = getFormData(e)

		updateUser(updatedUser)

		navigate('/')
	}

	return <Form handleSubmit={onSubmit} />
}
