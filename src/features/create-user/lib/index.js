export const getFormData = (event) => {
	const form = event.target

	return  {
		firstName: form.firstName.value,
		lastName: form.lastName.value,
		email: form.email.value,
		avatar: form.avatar.value,
	}
}
