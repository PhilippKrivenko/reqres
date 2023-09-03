import { getResource } from '../getResource'

export const getSingleUserRequest = async (userId) => {
	const res = await getResource(`/users/${userId}`)

	return res.data
}
