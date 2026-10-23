import './Header_com.css'
import { Link } from 'react-router-dom'

function Header_component() {
    return (
        <div>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Header_component