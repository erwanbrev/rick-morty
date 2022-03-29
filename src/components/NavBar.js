import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../FavoriteContext";
import logo from '../images/logo.png';
import './NavBar.css'

const NavBar = () => {
    
    const favContext = useContext(FavoriteContext);

    const linkList = [
        ['/', 'Home'],
        ['/favoris', 'Favoris ('+favContext.favs.length+')'],
        ['/rechercher', 'Recherche'],
    ]
    
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