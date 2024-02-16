import styles from "../Error/Erreur.module.css";
import Template from "../../conponents/3_Structures/Templates/Template";
// Importe le composant Link de la bibliothèque react-router-dom pour gérer la navigation côté client dans les applications React
import { Link } from "react-router-dom";

function Error() {
  return (
    // Utilise le composant Template comme conteneur principal
    <Template>
      <div className={styles.leMain}>
        {/* Affiche le titre de l'erreur */}
        <h1 className={styles.title404}>404</h1>
        {/* Affiche le texte de l'erreur */}
        <div className={styles.textError1}>
          <p>Oups! La page que </p> <p> vous demandez n'existe pas.</p>
        </div>
        {/* Crée un lien vers la page d'accueil */}
        <Link to="/" className={styles.liens_globale}>
          {/* Affiche le texte du lien */}
          <p className={styles.textError2}>Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </Template>
  );
}

export default Error;
