import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
