// Importation des modules nécessaires depuis React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Importation des composants et fonctions de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importation pages
import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/Apropos/Apropos";
import Error from "../pages/Error/Erreur";
import Location from "../pages/Logements/Locations";

ReactDOM.createRoot(document.getElementById("root")).render(
  //React StrictMode pour activer un ensemble des vérifs et des comportements supplémentaires pour le développement
  <React.StrictMode>
    {/* Utilisation de BrowserRouter pour fournir un wrapper pour l'application avec un support de routage */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/appartement/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
