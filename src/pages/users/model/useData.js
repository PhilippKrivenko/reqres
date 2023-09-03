import { useEffect, useState } from 'react'
import { getUsersList, transformUserData } from '../../../shared'

export const useData = (initialUsers, initialPage, initialTotalPage) => {
	const [users, setUsers] = useState(initialUsers)
	const [page, setPage] = useState(initialPage)
	const [totalPages, setTotalPages] = useState(initialTotalPage)

	const onChangePage = (e) => setPage(e.target.innerText)

	const getUsers = async (page) => {
		const res = await getUsersList(page)

		const users = res.data.map(transformUserData)
		const newPage = res.page
		const totalPages = res.total_pages

		setUsers(users)
		setPage(newPage)
		setTotalPages(totalPages)
	}

	useEffect(() => {
		getUsers(page)
	}, [page])

	return [users, totalPages, onChangePage]
}
