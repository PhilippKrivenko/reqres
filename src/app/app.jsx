import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../pages'
import ErrorBoundry from './providers/error-boundry'
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
