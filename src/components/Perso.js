import { useContext, useEffect, useState } from 'react';
import FavoriteContext from '../FavoriteContext';
import './Perso.css';

const Perso = (props) => {

    let {name, image, id} = props.persoDatas
    let favContext = useContext(FavoriteContext);
    let [isFav, setFav] = useState('');
    
    useEffect(
        () => {
            let find = false;
            for (let persoFav of favContext.favs) {
                if (persoFav.id != id) {
                    continue; // passe au tour de boucle suivant sans executer la suite
                }
                find = true;
                setFav(' active')
                break; // met fin a la boucle
            }
            if (!find) {
                setFav('')
            }
        }, [favContext]
    )
    
    
    return (
        <article className="perso">
            <img src={image} />
            <h3>{name}</h3>
            <span onClick={() => { favContext.register(props.persoDatas) }} className={"favorite"+isFav}></span>
        </article>
    )
}

export default Perso;