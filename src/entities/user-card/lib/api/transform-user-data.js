export const transformUserData = (userData) => {
	return {
		id: userData.id,
		email: userData.email,
		firstName: userData.first_name,
		lastName: userData.last_name,
		avatar: userData.avatar,
	}
}
