import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  GET_USERS
} from '../types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    case CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default githubReducer;
