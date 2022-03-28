import { useContext } from 'react';
import FavoriteContext from '../FavoriteContext';
import './Perso.css';

const Perso = (props) => {

    let {name, image} = props.persoDatas
    let favs = useContext(FavoriteContext);
    console.log(favs);
    
    
    return (
        <article className="perso">
            <img src={image} />
            <h3>{name}</h3>
            <span onClick={() => { favs.register(props.persoDatas) }} className="favorite"></span>
        </article>
    )
}

export default Perso;