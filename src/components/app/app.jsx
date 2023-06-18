import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import ErrorBoundry from '../error-boundry'
import store from '../../store'
import UsersListPage from '../pages/users-list-page'
import UserPage from '../pages/user-page'
import LoginPage from '../pages/login-page'
import Layout from '../layout'
import CreateUserPage from '../pages/create-user-page'
import RequireAuth from '../hoc/require-auth'
import RegisterPage from '../pages/register-page'

import './app.css'

const App = () => {
	return (
		<Provider store={store}>
			<ErrorBoundry>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<UsersListPage />} />
							<Route path="users/:id" element={<UserPage />} />
							<Route path="login" element={<LoginPage />} />
							<Route
								path="register"
								element={<RegisterPage />}
							/>
							<Route
								path="create"
								element={
									<RequireAuth>
										<CreateUserPage />
									</RequireAuth>
								}
							/>

							<Route
								path="*"
								element={<h2>Page not found</h2>}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</ErrorBoundry>
		</Provider>
	)
}

export default App
