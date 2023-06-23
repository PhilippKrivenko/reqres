export const setToken = (token) => {
	localStorage.setItem('token', JSON.stringify(token))
}

export const getToken = (token) => {
	return localStorage.getItem(token)
}
