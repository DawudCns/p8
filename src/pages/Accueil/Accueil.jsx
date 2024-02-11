import { Link } from "react-router-dom";
import styles from "/src/pages/Accueil/Accueil.css";
import Template from "/src/components/5_Templates/Templates";

function Accueil() {
  return (
    <Template>
      <Banner src={BannerImg} alt="" slogan="Chez vous, partout et ailleurs" />

      <main className={styles.mainAccueil}>
        <section className={styles.gallery}>
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

export default Accueil;
