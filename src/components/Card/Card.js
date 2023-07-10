import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const [favoriteCard, setFavoriteCard] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
    setFavoriteCard(!favoriteCard);
  };

  return (
    <div>
      <li className={styles.card}>
        {props.title}
        <div className={styles.columnIcon}>
          <button
            className={clsx('fa fa-star-o', styles.starButton, favoriteCard && styles.isActive)}
            onClick={handleToggleFavorite}
          ></button>
        </div>
      </li>
    </div>
  );
};

export default Card;