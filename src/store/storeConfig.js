import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // For handling asynchronous actions
import rootReducer from './reducers';

// Middleware setup (you can add other middlewares as necessary)
const middleware = [thunk];

// Redux DevTools setup (for development environment)
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create the Redux store with middleware and DevTools support
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)) // Middleware is applied here
);

export default store;
