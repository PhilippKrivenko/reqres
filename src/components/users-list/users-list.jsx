import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import UsersListItem from '../users-list-item'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Pagination from '../pagination'
import './users-list.css'

const UsersList = ({ users }) => {
	return (
		<main className="container">
			<h1>Hello ReqRes users!</h1>

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

			<Pagination />
		</main>
	)
}

const UsersListContainer = () => {
	const { users, status, error } = useSelector(
		(state) => state.reqres
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator error={error} />
	}
	return <UsersList users={users} />
}

export default UsersListContainer
