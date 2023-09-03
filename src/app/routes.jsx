import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {
	CreateUser,
	SignIn,
	SignUp,
	SingleUser,
	UpdateUser,
	Users,
} from '../pages'
import { Layout } from '../shared'

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Users />} />
				<Route path='users/:id' element={<SingleUser />} />
				<Route path='login' element={<SignIn />} />
				<Route path='register' element={<SignUp />} />
				<Route path='create' element={<CreateUser />} />
				<Route path='update' element={<UpdateUser />} />
				<Route path='*' element={<h2>Page not found</h2>} />
			</Route>
		</Routes>
	)
}
