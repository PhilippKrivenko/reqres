import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../utils'

export const WithAuth = (Component) => {
	return () => {
		const auth = getToken(false) ? true : false

		if (!auth) {
			return <Navigate to='/login' />
		}

		return <Component />
	}
}
