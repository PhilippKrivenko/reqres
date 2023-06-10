import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = ({ userId }) => {
	console.log(userId)

	const user = useSelector((state) => {
		return state.reqres.users.find((user) => user.id === userId)
	})

	const { email, firstName, lastName, avatar } = user

	return (
		<div>
			<p>{`${firstName} ${lastName}`}</p>
			<p>{email}</p>
			<img src={avatar} />
		</div>
	)
}

export default UserPage
