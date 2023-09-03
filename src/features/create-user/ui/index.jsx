import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../../shared'
import { getFormData } from '../lib'
import { Form } from './form'

export const CreateUserForm = () => {
	const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault()

		const newUser = getFormData(e)

		createUser(newUser)

		navigate('/')
	}

	return <Form handleSubmit={onSubmit} />
}
