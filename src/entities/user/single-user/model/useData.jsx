import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUserRequest, transformUserData } from '../../../../shared'

export const useData = (initialUser) => {
	const { id } = useParams()
	const [user, setUser] = useState(initialUser)

	const getSingleUser = async (userId) => {
		const res = await getSingleUserRequest(userId)
		const user = transformUserData(res)

		setUser(user)
	}

	useEffect(() => {
		getSingleUser(id)
	}, [])

	return user
}
