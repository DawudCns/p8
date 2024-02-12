import styles from "/src/conponents/3_Structures/Header/Header.module.css";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ link, title }) => {
  const location = useLocation();

  const active = location.pathname === link;

  return (
    <Link
      to={link}
      className={`${styles.liens_globale} ${active && styles.activeLink}`}
    >
      <p>{title}</p>
    </Link>
  );
};

export default NavLink;
