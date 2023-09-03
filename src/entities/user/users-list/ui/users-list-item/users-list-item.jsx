export const UsersListItem = ({ user }) => {
	const { firstName, email, avatar } = user

	return (
		<div>
			<h3>{firstName}</h3>
			<p>{email}</p>
			<img src={avatar} />
		</div>
	)
}
