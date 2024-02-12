import Footer from "/src/conponents/3_Structures/Footer/Footer";
import Header from "/src/conponents/3_Structures/Header/Header";
import styles from "/src/conponents/5_Templates/Templates.module.css";
import PropTypes from "prop-types";

const Template = ({ children }) => {
  return (
    <div className={styles.body}>
      <Header />
      <main className="mainTemplate">{children}</main>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
