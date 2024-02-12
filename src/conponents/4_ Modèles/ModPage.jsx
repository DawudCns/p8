import Footer from "/src/conponents/3_Structures/Footer/Footer";
import Header from "/src/conponents/3_Structures/Header/Header";

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
