import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/reqresSlice'
import UsersListItem from '../users-list-item'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import './users-list.css'

const UsersList = ({ users }) => {
	return (
		<div className="container">
			<h2>Hello ReqRes users!</h2>

			<ul>
				{users.map((user) => {
					const { id } = user

					return (
						<li key={id}>
							<UsersListItem user={user} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const UsersListContainer = () => {
	const { users, status } = useSelector((state) => state.reqres)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator />
	}
	return <UsersList users={users} />
}

export default UsersListContainer
