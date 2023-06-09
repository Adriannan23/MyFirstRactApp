import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getAllActiveCards = state => state.cards.filter(card => card.isFavorite);

console.log('getAllActiveCards', getAllActiveCards);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearching = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const addListForm = payload => ({ type: 'ADD_LIST_FORM', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

// to tu przechowujemy całą logikę do zmiany danych z centrali
// modyfikacja danych
const reducer = (state, action) => {

  switch (action.type) {

    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid(), }] };

    case 'UPDATE_SEARCHSTRING':

      return { ...state, searchString: action.payload };

    case 'TOGGLE_CARD_FAVORITE':
      {
        console.log('zmieniam favourite');
        console.log('payload akcji: ', action.payload);
        console.log('state, cards',)
        return {
          ...state, cards: state.cards.map(card =>
            (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card)
        };
      }

    case 'ADD_LIST_FORM':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] };

    default: return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;