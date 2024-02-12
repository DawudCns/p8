// Importation du module Link de react-router-dom pour créer des liens dans l'application
import { Link } from "react-router-dom";
import styles from "/src/pages/Accueil/Accueil.css";
import Template from "/src/conponents/5_Templates/Templates";
import Banner from "/src/conponents/2_Fondations/Banner/Banner";
// Importation de l'image de la bannière
import BannerImg from "/src/assets/images/IMG.jpg";
// Importation des données à partir du fichier JSON
import data from "../../data/fichier.json";

function Accueil() {
  return (
    <Template>
      {/* Bannière avec image et slogan */}
      <Banner src={BannerImg} alt="" slogan="Chez vous, partout et ailleurs" />

      <main className={styles.mainAccueil}>
        <section className={styles.gallery}>
          {/* Boucle sur les données pour afficher chaque appartement */}
          {data.map((item) => (
            <div key={item.id} className={styles.location}>
              <Link to={`/appartement/${item.id}`}>
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
