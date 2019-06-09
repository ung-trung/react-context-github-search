import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
  GET_USERS,
  SET_VISITED
} from '../types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    case CLEAR_USERS:
      return { ...state, users: [] };
    case SET_VISITED:
      return { ...state, visited: true };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default githubReducer;
