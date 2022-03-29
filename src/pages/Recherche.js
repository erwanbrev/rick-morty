import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";

const Recherche = () => {

    let [search, setSearch] = useSearchParams();


    return (
        <Fragment>
            <h1>Recherche</h1>
            <form onSubmit={(e) => { e.preventDefault(); setSearch({name: 'rick'}) } }>
                <input type="text" placeholder="nom du personnage"/>
                <input type="submit" value="envoyer"/>
            </form>

        </Fragment>
    )
}

export default Recherche;