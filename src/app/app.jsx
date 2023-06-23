import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundry from '../error-boundry'
import { Routing } from '../pages'
import './app.css'

export const App = () => {
	return (
		<ErrorBoundry>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</ErrorBoundry>
	)
}
