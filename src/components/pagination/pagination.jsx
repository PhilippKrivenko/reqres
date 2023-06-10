import React from 'react'
import { useSelector } from 'react-redux'

const Pagination = () => {
	const { totalPages } = useSelector(
		(state) => state.reqres.pageInfo
	)

	const getArrayPagesNumber = () => {
		const pagesList = []

		for (let count = 1; count <= totalPages; count++) {
			pagesList.push(count)
		}

		return pagesList
	}

	const pages = getArrayPagesNumber()

	return (
		<ul>
			{pages.map((page, index) => {
				return <li key={index}>{page}</li>
			})}
		</ul>
	)
}

export default Pagination
