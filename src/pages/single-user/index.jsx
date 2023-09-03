import React from 'react'
import { Link } from 'react-router-dom'
import { SingleUserCard } from '../../entities'
import { DeleteUserButton } from '../../features'

export const SingleUser = () => {
	return (
		<div>
			<h1>User Page</h1>

			<SingleUserCard />

			<Link to='/update'>Update user</Link>
			<DeleteUserButton />
		</div>
	)
}
