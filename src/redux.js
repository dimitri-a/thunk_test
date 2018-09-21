import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

// actions.js
export const addRepos = repos => ({
  type: 'ADD_REPOS',
  repos,
});

export const clearRepos = () => ({ type: 'CLEAR_REPOS' });

export const getRepos = () => dispatch => {
  try {
    const url = `https://api.github.com/users/reduxjs/repos?sort=updated`;
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addRepos(json)))

  } catch (error) {
    console.error(error);
    dispatch(clearRepos());
  }
};

// reducers.js
export const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPOS':
      console.log('reducer ADD_REPOS');
      return action.repos;
    case 'CLEAR_REPOS':
      return [];
    default:
      return state;
  }
};

export const reducers = combineReducers({ repos });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
