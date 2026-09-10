import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
	<>
		<header>
			<nav>
				<NavLink className="nav-links" to='/'>Home</NavLink>
				<NavLink className="nav-links" to='/shows'>Shows</NavLink>
				<NavLink className="nav-links" to='/search'>Search shows</NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</>
  )
}
