import React from 'react'

const UserCard = ({ user, onChangeMode, onDeleteUser }) => {
	const { email, firstName, lastName, avatar } = user

	return (
		<div>
			<div>
				<p>{firstName}</p>
				<p>{lastName}</p>
				<p>{email}</p>
				<img src={avatar} alt="img" />
			</div>

			<div>
				<button onClick={onChangeMode}>Update user</button>
				<button onClick={onDeleteUser}>Delete user</button>
			</div>
		</div>
	)
}

export default UserCard
