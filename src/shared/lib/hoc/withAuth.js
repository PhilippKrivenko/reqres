import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../shared/lib'

export const withAuth = (Component) => {
	return () => {
		const auth = getToken('token') ? true : false

		if (!auth) {
			return <Navigate to='/login' />
		}

		return <Component />
	}
}
