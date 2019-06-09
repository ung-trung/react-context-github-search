import React, { createContext, useReducer, useCallback } from 'react';
import github from '../../apis/githubApi';
import githubReducer from './githubReducer';
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

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  visited: false
};
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

  const getUser = useCallback(async text => {
    const { data } = await github.get(`/users/${text}`);
    console.log(data);

    dispatch({ type: GET_USER, payload: data });
  }, []);

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const setVisited = () => {
    dispatch({ type: SET_VISITED });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        visited: state.visited,
        getUsers,
        searchUsers,
        clearUsers,
        setVisited,
        getUser
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
