import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import UsersListItem from '../users-list-item'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Pagination from '../pagination'
import './users-list.css'
import SearchPanel from '../search-panel'

const UsersList = ({ users, onSelectedUser }) => {
	return (
		<main className="container">
			<h1>Hello ReqRes users!</h1>

			<SearchPanel />

			<ul>
				{users.map((user) => {
					const { id } = user

					return (
						<li
							key={id}
							onClick={() => {
								onSelectedUser(id)
							}}>
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
	const [searchParams] = useSearchParams()
	const currentPage = searchParams.get('page')
	const { users, status, error, searchTerm } = useSelector(
		(state) => state.reqres
	)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSelectedUser = (id) => navigate(`/users/${id}`)

	const search = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter((item) => item.firstName.includes(term))
	}
	const visibleUsers = search(users, searchTerm)

	useEffect(() => {
		dispatch(fetchUsers(currentPage))
	}, [currentPage])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator error={error} />
	}
	return <UsersList users={visibleUsers} onSelectedUser={onSelectedUser} />
}

export default UsersListContainer
