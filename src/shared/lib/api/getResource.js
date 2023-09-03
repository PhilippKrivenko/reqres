export const getResource = async (url) => {
	const res = await fetch(`${process.env.REACT_APP_BASE_API}${url}`)

	if (!res.ok) {
		throw new Error(`Could not fetch ${url} received ${res.status}`)
	}

	return res.json()
}