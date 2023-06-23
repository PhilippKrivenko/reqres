import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../pagination'
import SearchPanel from '../../search-panel'
import SizeBar from '../../size-bar'
import UsersList from '../../users-list'
import { useState } from 'react'

export const UsersList = () => {
	const navigate = useNavigate()

	const [page, setPage] = useState('')
	const [perPage, setPerPage] = useState('')
	const [searchTerm, setSearchTerm] = useState('')

	const searchUser = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter((item) => item.firstName.includes(term))
	}

	const onSelectedUser = (id) => navigate(`/users/${id}`)
	const onUsersOnPage = (e) => setPerPage(e.target.innerText)
	const onSearchChange = (e) => setSearchTerm(e.target.value)
	const onChangePage = (e) => setPage(e.target.innerText)

	const visibleUsers = searchUser(users, searchTerm)

	useEffect(() => {}, [page, perPage])

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
