import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/removeRedux';


const Card = (props) => {
  const [favoriteCard, setFavoriteCard] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
    setFavoriteCard(!favoriteCard);
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id)); // Dispatch the action with the card ID as the payload
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
          <button
            className={clsx('fa fa-trash', styles.trashButton)}
            onClick={handleRemoveCard}
          ></button>
        </div>
      </li>
    </div>
  );
};

export default Card;