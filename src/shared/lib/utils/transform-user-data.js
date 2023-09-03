export const transformUserData = (data) => {
	return {
		id: data.id,
		email: data.email,
		firstName: data.first_name,
		lastName: data.last_name,
		avatar: data.avatar,
	}
}
