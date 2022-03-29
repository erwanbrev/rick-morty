import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";

import './App.css'
import FavoriteContext from "./FavoriteContext";
import { useEffect, useState } from "react";
import Recherche from "./pages/Recherche";

function App() {

  let [favs, setFavs] = useState([]);

  useEffect(
    () => {
      if (localStorage) {
        let persos = localStorage.getItem('myfav');
        if (persos && persos.length) {
            persos = JSON.parse(persos);
        } else {
            persos = [];
        }
        setFavs(persos);
      }
    }, []
  )

  const register = (perso) => {
    if (localStorage) {
      let add = true;
      let persos = localStorage.getItem('myfav');
      if (persos && persos.length) {
        persos = JSON.parse(persos);
      } else {
        persos = [];
      }
      persos = persos.filter(
        (item) => {
          if (item.id === perso.id) {
            add = false;
            return false;
          } else {
            return true;
          }
        }
      )
      if (add) {
        persos.push(perso);
      }
      setFavs(persos);
      let persosStorage = JSON.stringify(persos);
      localStorage.setItem('myfav', persosStorage);
    }
  }

  return (
    <div className="App">
      <FavoriteContext.Provider value={ {favs, register} }>
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={ <Accueil/> } />
          <Route path="/favoris" element={ <Favoris /> } />
          <Route path="/rechercher" element={ <Recherche /> } />
          <Route path="/:pageNumber" element={ <Accueil/> } />
        </Routes>
      </div>
      <aside>
        Contenu sur le côté
      </aside>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
