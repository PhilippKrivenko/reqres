import { getResource } from '../../../../shared/API'
import { transformUserData } from './transform-user-data'

export const getUser = async (userId) => {
	const res = await getResource(`/users/${userId}`)

	return transformUserData(res.data)
}
