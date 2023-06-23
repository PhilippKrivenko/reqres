import { baseApi } from '../../../../shared/API'

export const deleteUser = async (userId) => {
	const res = await fetch(`${baseApi}/users/${userId}`, {
		method: 'DELETE',
	})

	if (!res.ok) {
		throw new Error(`Could not fetch received ${res.status}`)
	}
}
