import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getAllActiveCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from './../Card/Card';


const Favorite = props => {

  const activeCards = useSelector(state => getAllActiveCards(state, props.id));

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div>
        <ul className={styles.cards}>
          {activeCards.map(card =>
            <Card key={card.id} id={card.id} title={card.title} />)}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
