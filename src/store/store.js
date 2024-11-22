// src/store/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

// Create a Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
);

export default store;