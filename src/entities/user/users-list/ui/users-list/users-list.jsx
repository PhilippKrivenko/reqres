import { useNavigate } from 'react-router-dom'
import { UsersListItem } from '../users-list-item/users-list-item'

import './users-list.css'

export const UsersList = ({ users }) => {
	const navigate = useNavigate()

	const onSelectedUser = (id) => navigate(`/users/${id}`)

	return (
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
	)
}
