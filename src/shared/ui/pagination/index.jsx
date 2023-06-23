import React from 'react'
import { numberToArray } from '../../lib'

export const Pagination = ({ onChangePage, totalPages }) => {
	const pages = numberToArray(totalPages)

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
