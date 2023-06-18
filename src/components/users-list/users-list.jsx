import React from 'react'
import UsersListItem from '../users-list-item'
import './users-list.css'

const UsersList = ({ users, onSelectedUser }) => {
	return (
		<div className="container">
			<ul>
				{users.map((user) => {
					const { id } = user

					return (
						<li
							key={id}
							onClick={() => {
								onSelectedUser(id)
							}}>
							<UsersListItem user={user} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default UsersList
