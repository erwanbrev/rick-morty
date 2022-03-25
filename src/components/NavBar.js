import { Link } from "react-router-dom";

const linkList = [
    ['/', 'Home'],
    ['/404', '404'],
]

const NavBar = () => {
    return (
        <nav>
            <img src="https://picsum.photos/150/100"/>
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