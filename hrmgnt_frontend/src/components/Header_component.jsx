import './Header_com.css'
import { Link } from 'react-router-dom'

function Header_component(){
    return(
        <div class='header'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    )
}

export default Header_component