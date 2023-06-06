import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import ErrorBoundry from '../error-boundry'
import { ReqresServiceProvider } from '../reqres-service-context'
import { ReqresService } from '../../services'

import store from '../../store'
import UsersList from '../users-list'
import UserPage from '../user-page'
import Authorization from '../authorization'

const reqresService = new ReqresService()

const App = () => {
	return (
		<Provider store={store}>
			<ErrorBoundry>
				<ReqresServiceProvider value={reqresService}>
					<Router>
						<Routes>
							<Route
								path="/"
								element={<UsersList />}
							/>
							<Route
								path="/users/:id"
								render={(match) => {
									return (
										<UserPage itemId={match.params.id} />
									)
								}}
							/>
							<Route
								path=""
								element={<Authorization />}
							/>
							<Route
								path=""
								element={<h2>Page not found</h2>}
							/>
						</Routes>
					</Router>
				</ReqresServiceProvider>
			</ErrorBoundry>
		</Provider>
	)
}

export default App
