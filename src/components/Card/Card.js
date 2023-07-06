import Button from '../Button/Button';
import styles from './Card.module.scss';

const Card = props => {

  return (
    <div>
      <li className={styles.card}>
        {props.title}
        <div className={styles.columnIcon}>
          <button className='fa fa-star-o'></button>
        </div >
      </li>
    </div >
  );
};

export default Card;