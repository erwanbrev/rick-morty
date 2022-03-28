import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./pages/Accueil";

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={ <Accueil/> } />
          <Route path="/:pageNumber" element={ <Accueil/> } />
        </Routes>
      </div>
      <aside>
        Contenu sur le côté
      </aside>
    </div>
  );
}

export default App;
