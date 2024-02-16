// Importe les composants Navigate et useParams de react-router-dom pour gérer la navigation et récupérer les paramètres d'URL
import { Navigate, useParams } from "react-router-dom";
// Importe le hook useState de React pour gérer l'état local dans le composant
import { useState } from "react";
import data from "../../../fichier.json";
import styles from "../Logements/Locations.module.css";
import Template from "../../conponents/3_Structures/Templates/Template";

// Importe l'image de flèche
import Arrow from "../../assets/images/arrow.png";

import Btns from "../../conponents/1_Primitives/Bouton/Bouton";
// Importe l'image des étoiles vides et pleines pour afficher la note du logement
import star from "../../assets/images/VectorGris.png";
import starFull from "../../assets/images/VectorFull.png";

function Location() {
  // Récupère le paramètre d'URL "id" à l'aide du hook useParams
  const { id } = useParams();

  // Recherche l'objet logement correspondant à l'ID dans les données
  const item = data.find((appartement) => appartement.id === id);
  // Si aucun logement n'est trouvé, redirige vers la page d'erreur 404
  if (item === undefined) {
    return <Navigate to="/404" />;
  }

  const imagesCarousel = item.pictures;
  // Initialise l'état local "slide" pour gérer l'index de l'image
  const [slide, setSlide] = useState(0);

  // Fonction pour passer à l'image suivante dans le carousel
  const slideSuivant = () => {
    const newImage = (slide + 1) % imagesCarousel.length;
    setSlide(newImage);
  };

  // Fonction pour passer à l'image précédente dans le carousel
  const slidePrecedent = () => {
    const newImage =
      (slide - 1 + imagesCarousel.length) % imagesCarousel.length;
    setSlide(newImage);
  };

  // Tableau pour stocker les éléments d'étoiles pleines et vides en fonction de la note du logement
  const etoile = 5;
  const etoileFull = item.rating;
  const etoiles = [];

  // Ajoute des étoiles vides au tableau pour compléter jusqu'à 5 étoiles
  for (let i = 0; i < etoileFull; i++) {
    etoiles.push(
      <li key={i}>
        <img src={starFull} alt="" />
      </li>
    );
  }

  for (let i = etoileFull; i < etoile; i++) {
    etoiles.push(
      <li key={i} className={styles.etoiles}>
        <img src={star} alt="" />
      </li>
    );
  }

  // Nombre total d'images dans le carousel
  const nbrPictures = item.pictures.length;

  // Retourne le contenu du composant Location
  return (
    <Template>
      <main className={styles.container}>
        {/* Section pour afficher le carousel d'images */}
        <section className={styles.banniere}>
          <div className={styles.carousel}>
            <img src={imagesCarousel[slide]} alt="" />
          </div>
          <p className={styles.nbImg}>
            {slide + 1}/{nbrPictures}
          </p>
          {/* Boutons pour naviguer dans le carousel */}
          <button onClick={slidePrecedent} className={styles.btnLeft}>
            <img src={Arrow} alt="" />
          </button>
          <button onClick={slideSuivant} className={styles.btnRight}>
            <img src={Arrow} alt="" />
          </button>
        </section>

        {/* Section pour afficher les informations sur le logement */}
        <section className={styles.infosLogements}>
          {/* Sous-section pour le titre et l'adresse du logement */}
          <section>
            <div className={styles.nameAddressLogement}>
              <h1 className={styles.titleLoc}>{item.title}</h1>
              <h2>{item.location}</h2>
            </div>

            {/* Div pour afficher les tags du logement */}
            <div className={styles.infos}>
              {item.tags.map((tag, index) => (
                <div className={styles.childInfos} key={index}>
                  {" "}
                  <p>{tag}</p>{" "}
                </div>
              ))}
            </div>
          </section>
          {/* Sous-section pour l'identité de l'hôte et la note du logement */}
          <section className={styles.infoLogementRight}>
            <div className={styles.identite}>
              <div className={styles.nomPrenom}>
                <h2 className={styles.nom}>{item.host.name}</h2>
              </div>
              <img
                className={styles.imgProfil}
                src={item.host.picture}
                alt=""
              />
            </div>
            <div className={styles.star}>
              {/* Affiche les étoiles représentant la note du logement */}
              <ul>{etoiles}</ul>
            </div>
          </section>
        </section>

        {/* Section pour afficher les boutons "Description" et "Equipement" */}
        <section className={styles.btns}>
          <div className={styles.btn1}>
            {/* Bouton "Description" */}
            <Btns name="Déscription" text={item.description} />
          </div>
          <div className={styles.btn2}>
            {/* Bouton "Equipement" */}
            <Btns
              className={styles.btn22}
              name="Equipement"
              text={item.equipments}
            />
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Location;
