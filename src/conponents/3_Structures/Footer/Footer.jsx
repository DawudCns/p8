// Importation des styles CSS du composant Footer
import styles from "/src/conponents/3_Structures/Footer/Footer.module.css";
// Importation du logo
import LogoBis from "/src/assets/images/logo-kasa.png";

// Définition du composant Footer
function Footer() {
  return (
    <>
      {/* Section contenant le footer */}
      <footer>
        {/* Section contenant le logo */}
        <div className={styles.logo_footer}>
          {/* Affichage du logo avec un attribut alt vide */}
          <img src={LogoBis} alt="" />
        </div>
        {/* Texte de droit d'auteur */}
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

// Exportation du composant Footer
export default Footer;
