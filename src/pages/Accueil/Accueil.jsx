// Importation des modules React
import React from "react";
import { Link } from "react-router-dom"; // Importation du module Link de react-router-dom pour créer des liens dans l'application
import Template from "../../conponents/3_Structures/Templates/Template"; // Importation du composant Template
import Banner from "/src/conponents/2_Fondations/Banner/Banner"; // Importation du composant Banner
import BannerImg from "/src/assets/images/IMG.jpg"; // Importation de l'image de la bannière
import data from "../../../fichier.json"; // Importation des données à partir du fichier JSON
import styles from "../Accueil/Accueil.module.css"; // Importation des styles CSS spécifiques à la page d'accueil

// Définition du composant Accueil
function Accueil() {
  return (
    // Utilisation du Template comme enveloppe de la page
    <Template>
      {/* Affichage de la bannière */}
      <Banner src={BannerImg} alt="" slogan="Chez vous, partout et ailleurs" />

      {/* Section principale de la page d'accueil */}
      <main className={styles.mainAccueil}>
        {/* Galerie d'éléments */}
        <section className={styles.gallery}>
          {/* Mapping des données pour afficher chaque élément */}
          {data.map((item) => (
            <div key={item.id} className={styles.location}>
              {/* Lien vers la page détaillée de chaque élément */}
              <Link to={`/appartement/${item.id}`}>
                {/* Affichage de l'image de couverture et du titre */}
                <img className={styles.imgCover} src={item.cover} alt="" />
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Template>
  );
}

// Export du composant Accueil
export default Accueil;
