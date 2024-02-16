import React from "react"; // Importation de React
import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des types
import Header from "../Header/Header"; // Importation du composant Header
import Footer from "../Footer/Footer"; // Importation du composant Footer
import styles from "../Templates/Template.module.css"; // Importation des styles CSS spécifiques au Template

// Définition du composant Template
const Template = ({ children }) => {
  return (
    // Structure du template
    <div className={styles.body}>
      {/* Affichage du composant Header */}
      <Header />
      {/* Contenu dynamique rendu à l'intérieur du composant Template */}
      <main className="mainTemplate">{children}</main>
      {/* Affichage du composant Footer */}
      <Footer />
    </div>
  );
};

// Définition des types de props attendues pour le composant Template
Template.propTypes = {
  children: PropTypes.node, // Le contenu du Template, qui peut être de n'importe quel type valide
};

// Exportation du composant Template
export default Template;
