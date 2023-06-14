import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
	const location = useLocation()
	const auth = true

	if (!auth) {
		return <Navigate to="/register" state={{ from: location }} />
	}

	return children
}

export default RequireAuth
