// Importation de l'image du logo
import LogoBis from "/src/assets/images/logo-kasa.png";

// Définition du composant Logo
const Logo = () => {
  return (
    // Section contenant l'image du logo
    <section>
      {/* Affichage de l'image du logo avec la source spécifiée et un attribut alt vide */}
      <img src={LogoBis} alt="" />
    </section>
  );
};

// Exportation du composant Logo
export default Logo;
