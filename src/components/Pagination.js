import { Link } from "react-router-dom";

const showPage = (pageMax, pagenumber) => {
    let pageLink = [];

    // les 3 pages avant la notre
    for (let x = 1; x < 4; x++) { // je fais 3 tour de boucle
        let pageLinkNumber = pagenumber - x; // je calcul le nouveau numero de page du lien
        if (pageLinkNumber < 1) // si il est inférieur à 1
            break; // j'arrète la boucle
        pageLink.push(<Link to={"/"+pageLinkNumber}>{pageLinkNumber}</Link>) // sinon j'ajoute le lien a la liste
    }
    pageLink.reverse(); // je remets les pages dans le bon ordre

    pageLink.push(<span className="actualPage">{pagenumber}</span>) // j'ajoute la page actuelle
    
    // les 3 pages après la notre
    for (let x = 1; x < 4; x++) { // je fais 3 tour de boucle
        let pageLinkNumber = pagenumber + x; // je calcul le nouveau numero de page du lien
        if (pageLinkNumber > pageMax) // si il est inférieur à 1
            break; // j'arrète la boucle
        pageLink.push(<Link to={"/"+pageLinkNumber}>{pageLinkNumber}</Link>) // sinon j'ajoute le lien a la liste
    }


    return pageLink;
}

const Pagination = (props) => {

    let {pageMax, pageNumber} = props;

    return (
        <div className="pagination">
            {
                (pageNumber > 1) &&
                    <Link to='/1'>{'<<'}</Link>
            }
            {
                (pageNumber > 1) &&
                    <Link to={'/'+(pageNumber - 1)}>{'<'}</Link>
            }

            { showPage(pageMax, pageNumber) }

            {
                (pageNumber < pageMax) &&
                    <Link to={'/'+(pageNumber + 1)}>{'>'}</Link>
            }
            {
                (pageNumber < pageMax) &&
                    <Link to={'/'+(pageMax)}>{'>>'}</Link>
            }
        </div>
    )
}

export default Pagination;