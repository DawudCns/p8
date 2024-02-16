// Importation des styles CSS du composant Banner
import styles from "/src/conponents/2_Fondations/Banner/Banner.module.css";

// Déclaration de la fonction Banner en utilisant une fonction fléchée.
// Elle prend un objet destructuré avec trois propriétés : src, alt et slogan.
const Banner = ({ src, alt, slogan }) => {
  // Retourne une section JSX qui représente un composant de bannière.
  return (
    <section className={styles.banner}>
      <div className={styles.flou}>
        <div></div>
      </div>
      {/* Affiche l'image avec la source et l'attribut alt spécifiés */}
      <img src={src} alt={alt} />
      {/* Affiche le slogan de la bannière */}
      <p className={styles.bannerText}>{slogan}</p>
    </section>
  );
};

// Exporte le composant Banner
export default Banner;
