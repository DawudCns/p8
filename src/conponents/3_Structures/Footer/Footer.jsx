import styles from "/src/conponents/3_Structures/Footer/Footer.css";
import LogoBis from "/src/assets/images/logo-kasa.png";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.logo_footer}>
          <img src={LogoBis} alt="" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

export default Footer;
