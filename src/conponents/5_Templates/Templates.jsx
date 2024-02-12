// Importation des composants Footer et Header
import Footer from "/src/conponents/3_Structures/Footer/Footer";
import Header from "/src/conponents/3_Structures/Header/Header";

// Importation du CSS
import styles from "/src/conponents/5_Templates/Templates.module.css";

// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";

// Définition du composant Template représentant le modèle de structure de page
const Template = ({ children }) => {
  return (
    // Conteneur principal avec une classe body
    <div className={styles.body}>
      <Header />
      {/* Affichage du contenu principal (éléments enfants) */}
      <main className="mainTemplate">{children}</main>

      <Footer />
    </div>
  );
};

// Validation des types de props
Template.propTypes = {
  children: PropTypes.node,
};

// Exportation du composant Template
export default Template;
