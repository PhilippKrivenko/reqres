import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../store/actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const UserPage = ({ user }) => {
	const { email, firstName, lastName, avatar } = user

	return (
		<div>
			<p>{`${firstName} ${lastName}`}</p>
			<p>{email}</p>
			<img src={avatar} alt="img" />
		</div>
	)
}

const UserPageContainer = () => {
	const { id } = useParams()
	const { error, status, users } = useSelector((state) => state.reqres)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUser(id))
	}, [id])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator error={error} />
	}

	return <UserPage user={users} />
}

export default UserPageContainer
