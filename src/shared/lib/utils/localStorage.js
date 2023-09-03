export const getToken = (initialValue) => {
	const token = localStorage.getItem('token')

	if (token) {
		return JSON.parse(token)
	}
	return initialValue
}

export const setToken = (value) => {
	localStorage.setItem('token', JSON.stringify(value))
}
