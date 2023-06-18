import React, { Fragment } from 'react'

const SizeBar = ({ onUsersOnPage }) => {
	return (
		<Fragment>
			<p>Users on page</p>
			<ul>
				<li onClick={onUsersOnPage}>3</li>
				<li onClick={onUsersOnPage}>6</li>
				<li onClick={onUsersOnPage}>12</li>
			</ul>
		</Fragment>
	)
}

export default SizeBar
