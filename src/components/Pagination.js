import { Link } from "react-router-dom";

const showPage = (pageMax, pagenumber) => {
    let pageLink = [];
    for (let i = 1; i <= pageMax; i++) {
        pageLink.push(<Link key={i} to={'/'+i}>{i}</Link>)
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