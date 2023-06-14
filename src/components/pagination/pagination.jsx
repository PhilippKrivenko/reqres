import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Pagination = () => {
	const { totalPages } = useSelector((state) => state.reqres.pageInfo)

	const getArrayPages = () => {
		const pagesList = []

		for (let count = 1; count <= totalPages; count++) {
			pagesList.push(count)
		}

		return pagesList
	}

	const pages = getArrayPages()

	return (
		<ul>
			{pages.map((page, index) => {
				return (
					<li key={index}>
						<Link to={`/?page=${page}`}>{page}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Pagination
