import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundry } from '../shared'

import './app.css'
import { Routing } from './routes'

export const App = () => {
	return (
		<ErrorBoundry>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</ErrorBoundry>
	)
}
