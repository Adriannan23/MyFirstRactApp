// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.scss';
import Container from "../Container/Container";


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
              <li><a href="/">Home</a></li>
              <li><a href="/favorite">Favorite</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;