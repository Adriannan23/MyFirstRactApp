// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.scss';
import Container from "../Container/Container";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {


  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <div className={styles.navIcon}>
            <a href='/'>
              <span className='fa fa-tasks'></span>
            </a>
          </div>
          <div className={styles.navLinks}>
            <ul>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite">Favorite</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;