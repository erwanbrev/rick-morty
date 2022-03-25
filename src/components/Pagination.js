import { Link } from "react-router-dom";

const prevNextPages = (pageLink, pagenumber, pagemax = 0, prev = true) => {
    // les 3 pages avant la notre
    for (let x = 1; x < 4; x++) { // je fais 3 tour de boucle
        let pageLinkNumber = (prev) ? (pagenumber - x) : (pagenumber + x) ; // je calcul le nouveau numero de page du lien
        if ((prev && pageLinkNumber < 1) || (!prev && pageLinkNumber > pagemax)) // si il est inférieur à 1
            break; // j'arrète la boucle
        pageLink.push(<Link key={pageLink.length} to={"/"+pageLinkNumber}>{pageLinkNumber}</Link>) // sinon j'ajoute le lien a la liste
    }
    if (prev)
        pageLink.reverse(); // je remets les pages dans le bon ordre
    return pageLink;
}

const showPage = (pageMax, pagenumber) => {
    let pageLink = [];

    pageLink = prevNextPages(pageLink, pagenumber) // les trois pages d'avant
    pageLink.push(<span key={pageLink.length} className="actualPage">{pagenumber}</span>) // j'ajoute la page actuelle
    pageLink = prevNextPages(pageLink, pagenumber, pageMax, false) // les trois pages d'après

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