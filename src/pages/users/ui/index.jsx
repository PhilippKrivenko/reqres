import React from 'react'
import { UsersList } from '../../../entities'
import { Pagination, searchItemForTerm, SearchPanel } from '../../../shared'
import { useData, useSearch } from '../model'

export const Users = () => {
	const [users, totalPages, onChangePage] = useData([], 1, 2)
	const [term, onSearch] = useSearch('')

	const visibleUsers = searchItemForTerm(users, 'firstName', term)

	return (
		<div>
			<h1>Hello ReqRes users!</h1>
			<SearchPanel onSearch={onSearch} />
			<UsersList users={visibleUsers} />
			<Pagination onChangePage={onChangePage} totalPages={totalPages} />
		</div>
	)
}
