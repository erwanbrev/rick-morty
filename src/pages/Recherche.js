import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "../components/Grid";

const Recherche = () => {

    let [search, setSearch] = useSearchParams();
    let [persoName, setPresoName] = useState(search.get('name'));

    // liste des besoin pour faire une recherche
    // possibilitée de varier la recherche -> nom de personnage, page

    return (
        <Fragment>
            <h1>Recherche</h1>
            <form onSubmit={(e) => { e.preventDefault(); setSearch({name: persoName}) } }>
                <input type="text" placeholder="nom du personnage" onChange={(e) => setPresoName(e.target.value) } value={persoName} />
                <input type="submit" value="envoyer"/>
            </form>

            <Grid>
                { /* affichage des résultats */ }
            </Grid>

        </Fragment>
    )
}

export default Recherche;