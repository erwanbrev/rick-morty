import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import './NavBar.css'
const linkList = [
    ['/', 'Home'],
    ['/404', '404'],
]

const NavBar = () => {
    return (
        <nav className="mainNav">
            <img src={logo} />
            <div>
                {
                    linkList.map(
                        ([url, titre], index) => <Link key={index} to={url}>{titre}</Link>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar;