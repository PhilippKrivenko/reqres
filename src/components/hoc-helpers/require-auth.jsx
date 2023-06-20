import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../helpers'

const RequireAuth = ({ children }) => {
	const auth = getToken('token') ? true : false

	if (!auth) {
		return <Navigate to="/login" />
	}

	return children
}

export default RequireAuth
