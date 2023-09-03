export const loginRequest = async (authData) => {
	const res = await fetch(`${process.env.REACT_APP_BASE_API}/login`, {
		method: 'POST',
		body: JSON.stringify(authData),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})

	if (!res.ok) {
		throw new Error(`Could not fetch received ${res.status}`)
	}

	return res.json()
}
