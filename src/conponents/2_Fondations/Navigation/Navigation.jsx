// Importation du composant NavLink
import NavLink from "/src/conponents/1_Primitives/NavLink/NavLink";

// Importation du hook useState depuis React
import { useState } from "react";

// Définition du composant Navigation
const Navigation = () => {
  return (
    // Crée un élément de navigation contenant deux liens NavLink
    <nav>
      <NavLink link="/" title="Accueil" />
      <NavLink link="/a-propos" title="A propos" />
    </nav>
  );
};

// Exportation du composant Navigation
export default Navigation;
