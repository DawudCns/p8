import styles from "/src/conponents/2_Fondations/Banner/Banner.css";

const Banner = ({ src, alt, slogan }) => {
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
