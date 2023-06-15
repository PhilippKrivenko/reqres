import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { pagination } from '../../store/reqresSlice'

const Pagination = () => {
	const { totalPages } = useSelector((state) => state.reqres.pageInfo)
	const [searchParams, setSearchParams] = useSearchParams()
	const dispatch = useDispatch()

	const getArrayPages = () => {
		const pagesList = []

		for (let count = 1; count <= totalPages; count++) {
			pagesList.push(count)
		}

		return pagesList
	}

	const onChangePage = (e) => {
		e.preventDefault()

		const query = e.target.innerText
		dispatch(pagination(query))
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
