import { getResource } from '../getResource'

export const getUsersList = async (page) => {
	return await getResource(`/users?page=${page}`)
}
