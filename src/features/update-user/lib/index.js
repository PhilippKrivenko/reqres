export const getFormData = (event) => {
	const form = event.target

	const data = {
		firstName: form.firstName.value,
		lastName: form.lastName.value,
		email: form.email.value,
		avatar: form.avatar.value,
	}

	return data
}
