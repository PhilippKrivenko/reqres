import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/reqresSlice'

const UsersList = () => {
	const users = useSelector((state) => state.reqres.usersData)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	})

	const items = users.map((item) => {
		const { id, email, firstName, avatar } = item

		return (
			<li key={id}>
				<h3>{firstName}</h3>
				<span>{email}</span>
				<img src={avatar} />
			</li>
		)
	})

	return (
		<div>
			<h2>Hello ReqRes users!</h2>

			<ul>{items}</ul>
		</div>
	)
}

export default UsersList
