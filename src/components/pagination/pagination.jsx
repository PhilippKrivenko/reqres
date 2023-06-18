import React from 'react'
import { useSelector } from 'react-redux'

const Pagination = ({ onChangePage }) => {
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
					<li key={index} onClick={onChangePage}>
						{page}
					</li>
				)
			})}
		</ul>
	)
}

export default Pagination
