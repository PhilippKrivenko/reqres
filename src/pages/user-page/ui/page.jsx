import React from 'react'
import { Link } from 'react-router-dom'
import { UserCard } from '../../../entities'

export const Page = ({ onDeleteUser }) => {
	return (
		<section>
			<h1>User Page</h1>
			<UserCard />
			<Link to='/update'>Update user</Link>
			<button onClick={onDeleteUser}>Delete user</button>
		</section>
	)
}
