import React from 'react'

const UpdateUser = ({ handleSubmit, user }) => {
	return (
		<div>
			<h1>Update user</h1>

			<form onSubmit={handleSubmit}>
				<label>
					first name:
					<input
						type="text"
						name="firstName"
						id="firstName"
						value={user.firstName}
					/>
				</label>
				<label>
					last name:
					<input
						type="text"
						name="lastName"
						id="lastName"
						value={user.lastName}
					/>
				</label>
				<label>
					email:
					<input
						type="text"
						name="email"
						id="email"
						value={user.email}
					/>
				</label>
				<label>
					avatar:
					<input
						type="text"
						name="avatar"
						id="avatar"
						value={user.avatar}
					/>
				</label>

				<button type="submit">done</button>
			</form>
		</div>
	)
}

export default UpdateUser
