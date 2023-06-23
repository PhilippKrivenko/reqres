import React from 'react'

export const Card = ({ user }) => {
	const { email, firstName, lastName, avatar } = user

	return (
		<div>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<img src={avatar} alt="img" />
		</div>
	)
}
