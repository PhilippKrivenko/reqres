import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUserRequest } from '../../shared'

export const DeleteUserButton = () => {
	const navigate = useNavigate()
	const { userId } = useParams()

	const onDeleteUser = () => {
		deleteUserRequest(userId)
		navigate('/')
	}

	return <button onClick={onDeleteUser}>Delete user</button>
}
