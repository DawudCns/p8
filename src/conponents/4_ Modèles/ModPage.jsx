import Footer from "/src/conponents/3_Sructures/Footer/Footer";
import Header from "/src/conponents/3_Sructures/Header/Header";

const Modeles = ({ children }) => {
  return (
    <div className={styles.body}>
      <Header />
      <main className="mainModeles">{children}</main>
      <Footer />
    </div>
  );
};

export default Modeles;
