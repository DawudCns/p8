// Importe l'image flèche
import ArrowImg from "../../../assets/images/arrow.png";
import styles from "../Bouton/bouton.module.css";
// Importe le hook useState depuis la bibliothèque React
import { useState } from "react";
// Importation des données à partir du fichier JSON
import data from "../../../../fichier.json";

function Btns({ name, text }) {
  // Définit un état local "open" qui contrôle l'affichage de la description, initialisé à false
  const [open, setOpen] = useState(false);

  // Fonction de gestion de clic qui inverse la valeur de l'état "open"
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.btncomplet}>
      {/* Conteneur principal du bouton */}
      <div className={styles.rideauDeroulant}>
        {/* Affiche le nom de la catégorie */}
        <p className={styles.categories}>{name}</p>
        {/* Bouton qui déclenche le changement de l'état "open" */}
        <button onClick={handleClick}>
          {/* Affiche une flèche, avec une classe CSS conditionnelle pour l'animation */}
          <img
            className={`${styles.arrow} ${open && styles.arrowOpen}`}
            src={ArrowImg}
            alt="Flèche qui ouvre la description"
          />
        </button>
      </div>
      {/* Affiche la description si "open" est true */}
      {open && (
        <aside className={styles.textHidden}>
          {/* Affiche le texte de la description */}
          <p key={data.id}>{text}</p>
        </aside>
      )}
    </div>
  );
}

export default Btns;
