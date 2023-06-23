import { deleteUser } from './api/responses'
import { useNavigate } from 'react-router-dom'

export const onDeleteUser = (userId) => {
	navigate = useNavigate()

	deleteUser(userId)
	navigate('/')
}
