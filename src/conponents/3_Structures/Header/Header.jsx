// Importation du composant Logo
import Logo from "/src/conponents/1_Primitives/Logo/Logo";

// Importation du composant Navigation
import Navigation from "/src/conponents/2_Fondations/Navigation/Navigation";

// Définition du composant Header
function Header() {
  // Retourne le contenu du composant Header
  return (
    <header>
      {/* Affichage du logo */}
      <Logo />
      {/* Affichage de la navigation */}
      <Navigation />
    </header>
  );
}

// Exportation du composant Header
export default Header;
