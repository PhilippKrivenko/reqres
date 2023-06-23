import React from 'react'

export const elementsPerPage = ({ handleClick, numbersArray }) => {
	return (
		<div>
			<p> elements per page: </p>

			<ul>
				{numbersArray.map((number, index) => {
					return (
						<li key={index} onClick={handleClick}>
							{number}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
