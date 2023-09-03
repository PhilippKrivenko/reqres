export const deleteUserRequest = async (userId) => {
	const res = await fetch(
		`${process.env.REACT_APP_BASE_API}/users/${userId}`,
		{
			method: 'DELETE',
		}
	)

	if (!res.ok) {
		throw new Error(`Could not fetch received ${res.status}`)
	}
}
