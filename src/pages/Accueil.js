import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Perso from '../components/Perso';
const Accueil = () => {
    let {pageNumber} = useParams(); // j'utilise les paramètre de l'url -> /:pageNumber donne un objet avec l'attribut pageNumber
    pageNumber = (typeof pageNumber == 'undefined') ? 1 : pageNumber // si pagenumber n'est pas dans l'url je considère être a la page 1
    let [APIDatas, setAPIDatas] = useState([]) // par defaut ma page est vide dans sa liste de personnage
    let [pageMax, setPageMax] = useState(1) // le maxpage est a 1 par défault mais peut evoluer
    useEffect(
        () => {
            // aller faire un fetch sur la liste de parsonnage sur l'api Rick&Morty en fonction de pagenumber
            fetch('https://rickandmortyapi.com/api/character/?page='+pageNumber)
                .then(response => response.json())
                .then(APIResult => {
                    setAPIDatas(APIResult.results)
                    setPageMax(APIResult.info.pages)
                })
        }, [pageNumber]
    )
    return (
        <div>
            {
                APIDatas.map(
                    item => {
                        <Perso datas={item} key={item.id} />
                    }
                )
            }
        </div>
    )
}

export default Accueil;