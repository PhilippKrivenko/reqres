import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteUser, fetchUser } from '../../../store/reqresSlice'
import Spinner from '../../spinner'
import ErrorIndicator from '../../error-indicator'
import UserCard from '../../user-card'
import UpdateUser from '../../update-user'
import { updateUser } from '../../../store/reqresSlice'

const UserPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id } = useParams()
	const { error, status, user } = useSelector(
		(state) => state.reqres
	)
	const [editMode, setEditMode] = useState(false)

	const onChangeMode = () => setEditMode(!editMode)
	const onDeleteUser = () => {
		dispatch(deleteUser(id))

		if (status === 'pending') {
			return <Spinner />
		}
		if (status === 'rejected') {
			return <ErrorIndicator error={error} />
		}
		navigate('/')
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		const form = e.target
		const updatedUser = {
			id,
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			avatar: form.avatar.value,
		}

		dispatch(updateUser(updatedUser))

		if (status === 'pending') {
			return <Spinner />
		}
		if (status === 'rejected') {
			return <ErrorIndicator error={error} />
		}
		setEditMode(!editMode)
	}

	useEffect(() => {
		dispatch(fetchUser(id))
	}, [])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator error={error} />
	}
	if (editMode) {
		return <UpdateUser handleSubmit={handleSubmit} user={user} />
	}
	return (
		<UserCard
			user={user}
			onChangeMode={onChangeMode}
			onDeleteUser={onDeleteUser}
		/>
	)
}

export default UserPage
