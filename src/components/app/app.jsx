import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import ErrorBoundry from '../error-boundry'
import { ReqresServiceProvider } from '../reqres-service-context'
import { ReqresService } from '../../services'

import store from '../../store'
import UsersList from '../users-list'
import UserPage from '../user-page'
import LoginPage from '../login-page'
import Layout from '../layout'
import CreateUser from '../create-user'
import UpdateUser from '../update-user'
import RequireAuth from '../hoc/require-auth'
import './app.css'

const reqresService = new ReqresService()

const App = () => {
	return (
		<Provider store={store}>
			<ErrorBoundry>
				<ReqresServiceProvider value={reqresService}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<UsersList />} />
								<Route path="users/:id" element={<UserPage />} />
								<Route path="login" element={<LoginPage />} />
								<Route
									path="create"
									element={
										<RequireAuth>
											<CreateUser />
										</RequireAuth>
									}
								/>
								<Route
									path="update"
									element={
										<RequireAuth>
											<UpdateUser />
										</RequireAuth>
									}
								/>
								<Route path="*" element={<h2>Page not found</h2>} />
							</Route>
						</Routes>
					</BrowserRouter>
				</ReqresServiceProvider>
			</ErrorBoundry>
		</Provider>
	)
}

export default App
