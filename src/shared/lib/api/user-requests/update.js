export const updateUser = async (updatedUser) => {
	const res = await fetch(
		`${process.env.REACT_APP_BASE_API}/users/${updatedUser.id}`,
		{
			method: 'put',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(updatedUser),
		}
	)

	if (!res.ok) {
		throw new Error(`Could not fetch received ${res.status}`)
	}

	return res.json()
}
