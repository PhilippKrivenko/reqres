export const createUser = async (newUser) => {
	const res = await fetch(`${process.env.REACT_APP_BASE_API}/users`, {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})

	if (!res.ok) {
		throw new Error('error')
	}

	return res.json()
}
