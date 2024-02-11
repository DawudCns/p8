import Footer from "/src/conponents/3_Sructures/Footer/Footer";
import Header from "/src/conponents/3_Sructures/Header/Header";
import styles from "/src/conponents/5_Templates/Templates.css";

const Template = ({ children }) => {
  return (
    <div className={styles.body}>
      <Header />
      <main className="mainTemplate">{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
