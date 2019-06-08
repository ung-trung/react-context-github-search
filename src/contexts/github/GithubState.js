import React, { createContext, useReducer, useCallback } from 'react';
import github from '../../apis/githubApi';
import githubReducer from './githubReducer';
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

const initialState = { users: [], user: {}, repos: [], loading: false };
// @ts-ignore
export const GithubContext = createContext();

const GithubState = props => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getUsers = useCallback(async () => {
    const { data } = await github.get('/users');

    dispatch({ type: GET_USERS, payload: data });
  }, []);

  const searchUsers = async text => {
    const { data } = await github.get(`/search/users?q=${text}`);
    dispatch({ type: SEARCH_USERS, payload: data.items });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUsers,
        searchUsers,
        clearUsers
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
