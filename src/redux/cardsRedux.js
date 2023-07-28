import shortid from 'shortid';
import strContains from '../utils/strContains';
import { REMOVE_CARD } from './removeRedux';

//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllActiveCards = state => state.cards.filter(card => card.isFavorite);

export const removeCard = (cardId) => ({
  type: REMOVE_CARD,
  payload: cardId,
});

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

//action creators

export const addCard = payload => ({ type: ADD_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
}

export default cardsReducer;