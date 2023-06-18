import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
	return (
		<Fragment>
			<header>
				<Link to="/login">Login</Link>
				<Link to="/create">Create user</Link>
			</header>

			<Outlet />
		</Fragment>
	)
}

export default Layout
