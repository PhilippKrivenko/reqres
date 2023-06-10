import React, { Fragment } from 'react'

const UsersListItem = ({ user }) => {
	const { firstName, email, avatar } = user

	return (
		<Fragment>
			<h3>{firstName}</h3>
			<p>{email}</p>
			<img src={avatar} />
		</Fragment>
	)
}

export default UsersListItem
