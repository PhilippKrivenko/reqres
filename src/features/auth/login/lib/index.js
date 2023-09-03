export const getFormData = (event) => {
	const form = event.target

	const authData = {
		email: form.email.value,
		password: form.password.value,
	}

	return authData
}
