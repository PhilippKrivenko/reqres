import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/actions'
import UsersListItem from '../users-list-item'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Pagination from '../pagination'
import './users-list.css'
import SearchPanel from '../search-panel'
import { sizePage } from '../../store/reqresSlice'


const UsersList = ({ users, onSelectedUser, onUsersOnPage }) => {
	return (
		<div className="container">
			<ul>
				<li onClick={onUsersOnPage}>3</li>
				<li onClick={onUsersOnPage}>6</li>
				<li onClick={onUsersOnPage}>12</li>
			</ul>

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
		</div>
	)
}

const UsersListContainer = () => {
	const {
		users,
		status,
		error,
		queries,
		queries: { page, perPage, term },
	} = useSelector((state) => state.reqres)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSelectedUser = (id) => navigate(`/users/${id}`)

	const onUsersOnPage = (e) => dispatch(sizePage(e.target.innerText))

	const search = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter((item) => item.firstName.includes(term))
	}

	const visibleUsers = search(users, term)

	useEffect(() => {
		dispatch(fetchUsers(queries))
	}, [page, perPage])

	if (status === 'pending') {
		return <Spinner />
	}
	if (status === 'rejected') {
		return <ErrorIndicator error={error} />
	}
	return (
		<main className="container">
			<h1>Hello ReqRes users!</h1>
			<SearchPanel />
			<UsersList
				users={visibleUsers}
				onSelectedUser={onSelectedUser}
				onUsersOnPage={onUsersOnPage}
			/>
			<Pagination />
		</main>
	)
}

export default UsersListContainer
