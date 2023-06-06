import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import animeReducer from './anime'
import animeEpisodesReducer from './animeDetail';
import animeReviewsReducer from './reviews';
import userReducer from "./user"
const rootReducer = combineReducers({
  session,
  anime: animeReducer,
  episodes:  animeEpisodesReducer,
  reviews: animeReviewsReducer,
  user: userReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
