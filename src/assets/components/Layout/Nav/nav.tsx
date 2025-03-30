import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className={styles.title}>Judith Cruz</li>
        <li>
          <Link to="/sobre-mi">Sobre mí</Link>
        </li>
		<li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Nav;