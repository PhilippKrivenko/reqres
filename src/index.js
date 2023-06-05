import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import ErrorBoundry from './components/error-boundry'
import { ReqresServiceProvider } from './components/reqres-service-context'
import ReqresService from './services/reqres-service'
import App from './components/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
const reqresService = new ReqresService()

console.log(await reqresService.getResource('users?page=1'))

root.render(
	<Provider store={store}>
		<ErrorBoundry>
			<ReqresServiceProvider value={reqresService}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ReqresServiceProvider>
		</ErrorBoundry>
	</Provider>
)
