import styles from "/src/conponents/2_Fondations/Banner/Banner.module.css";

// Déclaration de la fonction Banner en utilisant la syntaxe d'une fonction fléchée,
// elle prend un objet destructuré avec trois propriétés : src, alt et slogan.
const Banner = ({ src, alt, slogan }) => {
  // Retourne une section JSX qui représente un composant de bannière.
  return (
    <section className={styles.banner}>
      <div className={styles.flou}>
        <div></div>
      </div>
      <img src={src} alt={alt} />
      <p className={styles.bannerText}>{slogan}</p>
    </section>
  );
};

export default Banner;
