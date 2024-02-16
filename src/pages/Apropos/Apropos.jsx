// Importation des composants nécessaires
import Banner from "../../conponents/2_Fondations/Banner/Banner"; // Importation du composant de bannière
import BannerImg from "../../assets/images/IMG-banniere-2.jpg"; // Importation de l'image de la bannière
import Template from "../../conponents/3_Structures/Templates/Template"; // Importation du modèle de page
import styles from "../Apropos/Apropos.module.css"; // Importation des styles CSS spécifiques à la page
import Btns from "../../conponents/1_Primitives/Bouton/Bouton"; // Importation du composant de bouton

function Apropos() {
  // Définition des catégories avec leurs descriptions
  const categories = [
    {
      id: 1,
      name: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      name: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Toute perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      name: "Service",
      description:
        "Chez Kasa, nous mettons un point d'honneur à fournir un service de qualité à nos utilisateurs. Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner tout au long de votre expérience.",
    },
    {
      id: 4,
      name: "Sécurité",
      description:
        "La sécurité est notre priorité. Nous veillons à ce que toutes les transactions soient sécurisées et que les données personnelles de nos utilisateurs soient protégées.",
    },
  ];

  // Rendu du composant Apropos
  return (
    <Template>
      {/* Affichage de la bannière */}
      <Banner src={BannerImg} alt="textAlt" slogan="" />
      {/* Section principale de la page */}
      <main className={styles.container}>
        {/* Boucle à travers les catégories et affichage des boutons correspondants */}
        {categories.map((item) => (
          <Btns
            className={styles.button}
            key={item.id}
            name={item.name}
            text={item.description}
          />
        ))}
      </main>
    </Template>
  );
}

// Exportation du composant Apropos
export default Apropos;
