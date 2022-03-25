import { useParams } from "react-router-dom";

const Accueil = () => {
    let {pageNumber} = useParams();
    console.log(pageNumber);
    return (
        <h1>Accueil</h1>
    )
}

export default Accueil;