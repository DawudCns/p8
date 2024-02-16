// Importation des styles CSS du composant Header
import styles from "/src/conponents/3_Structures/Header/Header.module.css";

// Importation des modules nécessaires depuis react-router-dom
import { Link, useLocation } from "react-router-dom";

// Définition du composant NavLink qui crée un lien de navigation
const NavLink = ({ link, title }) => {
  // Utilisation du hook useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Vérifie si le lien est actif en comparant l'URL actuelle avec le lien
  const active = location.pathname === link;

  // Retourne le contenu du composant NavLink
  return (
    // Crée un lien de navigation avec les classes CSS correspondantes et activeLink si le lien est actif
    <Link
      to={link}
      className={`${styles.liens_globale} ${active && styles.activeLink}`}
    >
      {/* Affiche le titre du lien */}
      <p>{title}</p>
    </Link>
  );
};

// Exportation du composant NavLink
export default NavLink;
