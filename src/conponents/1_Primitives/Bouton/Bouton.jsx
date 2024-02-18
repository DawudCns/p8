// Importations
import { useState } from "react";
import ArrowImg from "../../../assets/images/arrow.png";
import styles from "../Bouton/bouton.module.css";
import data from "../../../../fichier.json";

// Composant Btns
function Btns({ name, text }) {
  // État local pour contrôler l'affichage de la description, initialisé à false
  const [open, setOpen] = useState(false);

  // Fonction de gestion de clic pour inverser l'état "open"
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.boutonGlobal}>
      {/* Conteneur principal du bouton */}
      <div className={styles.deroulantSection}>
        {/* Nom de la catégorie */}
        <p className={styles.typeCategorie}>{name}</p>
        {/* Bouton pour déclencher le changement de l'état "open" */}
        <button onClick={handleClick}>
          {/* Flèche avec classe CSS conditionnelle pour l'animation */}
          <img
            className={`${styles.fleche} ${open && styles.flecheOuverte}`}
            src={ArrowImg}
            alt="Flèche qui ouvre la description"
          />
        </button>
      </div>
      {/* Affichage de la description si "open" est true */}
      {open && (
        <aside className={styles.sousPartie}>
          {/* Texte de la description */}
          <p key={data.id}>{text}</p>
        </aside>
      )}
    </div>
  );
}

export default Btns;

