import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Perso from '../components/Perso';
const Accueil = () => {
    let {pageNumber} = useParams(); // j'utilise les paramètre de l'url -> /:pageNumber donne un objet avec l'attribut pageNumber
    pageNumber = (typeof pageNumber == 'undefined') ? 1 : pageNumber // si pagenumber n'est pas dans l'url je considère être a la page 1
    let [APIDatas, setAPIDatas] = useState([]) // par defaut ma page est vide dans sa liste de personnage
    let [pageMax, setPageMax] = useState(1) // le maxpage est a 1 par défault mais peut evoluer
    let [is404, set404] = useState(false)
    useEffect(
        () => {
            // aller faire un fetch sur la liste de parsonnage sur l'api Rick&Morty en fonction de pagenumber
            fetch('https://rickandmortyapi.com/api/character/?page='+pageNumber)
                .then(response => {
                    if (!response.ok) {
                        set404(true); return;
                    }
                    return response.json()
                })
                .then(APIResult => {
                    setAPIDatas(APIResult.results)
                    setPageMax(APIResult.info.pages)
                }).catch(err => set404(true));
        }, [pageNumber]
    )
    
    pageNumber = +(pageNumber); // je transforme le paramètre pageNumber en int
    if (isNaN(pageNumber) || is404)
        return (<h1>404</h1>)

    return (
        <div>
            {
                APIDatas.map(
                    item => 
                        <Perso persoDatas={item} key={item.id} />
                )
            }
        </div>
    )
}

export default Accueil;