import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    const [navbarOpen, setNavbarOpen] = useState(false)

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className='navBar'>
            <button onClick={handleToggle}><img src="https://img.icons8.com/ios-glyphs/512/menu.png" alt="menu" /></button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li>Welcome, {user.name}</li>
                <li><Link to="/all">All Duets</Link></li>
                <li><Link to="/duets">New Duet</Link></li>
                <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
            </ul>
        </nav>
    )
}