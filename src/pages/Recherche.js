import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "../components/Grid";
import Perso from "../components/Perso";

const Recherche = () => {

    let [search, setSearch] = useSearchParams();
    let name = search.get('name')
    let [persoName, setPresoName] = useState( name ? name : '' );
    let [persos, setPersos] = useState([]);
    // liste des besoin pour faire une recherche
    // possibilitée de varier la recherche -> nom de personnage, page
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (persoName === '') {
            setSearch({})
        } else {
            setSearch({name: persoName})
        }
    }

    useEffect(
        () => {
            let url = 'https://rickandmortyapi.com/api/character/';
            let name = search.get('name');
            if (name)
                url += '?name='+name
            fetch(url)
                .then(response => response.json())
                .then(personnages => {
                    if ('results' in personnages) {
                        setPersos(personnages.results)
                    } else {
                        setPersos([])
                    }
                })
        }, [search]
    )

    return (
        <Fragment>
            <h1>Recherche</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nom du personnage" onChange={(e) => setPresoName(e.target.value) } value={persoName} />
                <input type="submit" value="envoyer"/>
            </form>
            {
                (persos.length) ?
                    <Grid>
                        { persos.map(item => <Perso key={item.id} persoDatas={item} />) }
                    </Grid>
                :
                    <p className="alert">Aucuns résultats pour votre recherche !</p>
            }

        </Fragment>
    )
}

export default Recherche;