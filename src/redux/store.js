import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux'
import cardsReducer from './cardsRedux'
import searchStringReducer from './searchStringRedux'
import columnsReducer from './columnsRedux'

//selectors

// action creators

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

// to tu przechowujemy całą logikę do zmiany danych z centrali
// modyfikacja danych

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;