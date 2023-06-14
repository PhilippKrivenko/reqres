import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
	return (
		<Fragment>
			<header>
				<Link to="/register">Register</Link>
				<Link to="/create">Create user</Link>
				<Link to="/update">Update user</Link>
			</header>

			<Outlet />
		</Fragment>
	)
}

export default Layout
