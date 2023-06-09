import React from 'react'
import Layout from '../app/layout'
import { UserPage } from './user-page/model'

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<UsersList />} />
				<Route path='users/:id' element={<UserPage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='create' element={<CreateUser />} />
				<Route path='update' element={<UpdateUser />} />
				<Route path='*' element={<h2>Page not found</h2>} />
			</Route>
		</Routes>
	)
}
