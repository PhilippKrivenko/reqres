import React from 'react'
import UserCard from '../../user-card'

export const Page = ({ onDeleteUser }) => {
	return (
		<section>
			<h1>User Page</h1>
			<UserCard />
			<button onClick={onDeleteUser}>Delete user</button>
		</section>
	)
}
