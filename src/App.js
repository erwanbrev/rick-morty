import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="/:pageNumber" element={ <Accueil/> } />
      </Routes>
    </div>
  );
}

export default App;
