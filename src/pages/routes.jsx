import React from 'react'
import Layout from '../app/layout'
import { RequireAuth } from '../app/providers/withAuth'

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<UsersList />} />
				<Route path="users/:id" element={<UserPage />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route
					path="create"
					element={
						<RequireAuth>
							<CreateUser />
						</RequireAuth>
					}
				/>
				<Route path="*" element={<h2>Page not found</h2>} />
			</Route>
		</Routes>
	)
}
