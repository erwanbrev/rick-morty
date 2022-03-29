import { useContext } from "react";
import Grid from "../components/Grid";
import Perso from "../components/Perso";
import FavoriteContext from "../FavoriteContext";

const Favoris = () => {
    let { favs } = useContext(FavoriteContext);

    return (
        <div>
            <h1>Mes Favoris</h1>
            <Grid>
                {
                    favs.map( item => <Perso key={item.id} persoDatas={item} />)
                }
            </Grid>
        </div>
    )
}

export default Favoris;