import { useNavigate } from 'react-router-dom'
import { registerRequest, setToken } from '../../../../shared'
import { getFormData } from '../lib'
import { Form } from './form'

export const LoginForm = () => {
	const navigate = useNavigate()

	const onSubmit = async (e) => {
		e.preventDefault()

		const authData = getFormData(e)

		const res = await registerRequest(authData)

		setToken(res)
		navigate('/')
	}

	return <Form onSubmit={onSubmit} />
}
