import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
	return (
		<>
			<header>
				<Link to="/login">Login</Link>
				<Link to="/create">Create user</Link>
			</header>

			<Outlet />
		</>
	)
}

export default Layout
