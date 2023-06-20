export const setToken = async (data, method) => {
	const response = await method(data)

	localStorage.setItem('token', JSON.stringify(response))
}

export const getToken = async (token) => {
	return localStorage.getItem(token)
}
