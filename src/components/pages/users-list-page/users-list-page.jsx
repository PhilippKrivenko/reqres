import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../store/reqresSlice'
import ErrorIndicator from '../../error-indicator'
import Spinner from '../../spinner'
import Pagination from '../../pagination'
import SearchPanel from '../../search-panel'
import SizeBar from '../../size-bar'
import UsersList from '../../users-list'
import { useState } from 'react'

const UsersListPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { users, status, error } = useSelector(state => state.reqres)

	const [page, setPage] = useState('')
	const [perPage, setPerPage] = useState('')
	const [searchTerm, setSearchTerm] = useState('')

	const searchUser = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => item.firstName.includes(term))
	}

	const onSelectedUser = id => navigate(`/users/${id}`)
	const onUsersOnPage = e => setPerPage(e.target.innerText)
	const onSearchChange = e => setSearchTerm(e.target.value)
	const onChangePage = e => setPage(e.target.innerText)

	const visibleUsers = searchUser(users, searchTerm)

	useEffect(() => {
		dispatch(fetchUsers({ page, perPage }))
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
			<SearchPanel onSearchChange={onSearchChange} />
			<SizeBar onUsersOnPage={onUsersOnPage} />
			<UsersList users={visibleUsers} onSelectedUser={onSelectedUser} />
			<Pagination onChangePage={onChangePage} />
		</main>
	)
}

export default UsersListPage
