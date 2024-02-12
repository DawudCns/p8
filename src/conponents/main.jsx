// Importation des modules nécessaires depuis React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Importation des composants et fonctions de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importation du composant Accueil
import Accueil from "../pages/Accueil/Accueil";

ReactDOM.createRoot(document.getElementById("root")).render(
  //React StrictMode pour activer un ensemble des vérifs et des comportements supplémentaires pour le développement
  <React.StrictMode>
    {/* Utilisation de BrowserRouter pour fournir un wrapper pour l'application avec un support de routage */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
