import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RepoList from '../../components/repos/RepoList';
import UserInfo from './UserInfo';

import { GithubContext } from '../../contexts/github/GithubState';

const UserDetail = props => {
  const { getUser, getRepos } = useContext(GithubContext);
  const { text } = props.match.params;

  useEffect(() => {
    getUser(text);
    getRepos(text);
  }, [getRepos, getUser, text]);

  return (
    <>
      <Link className="ui button" to="/">
        Back to Search
      </Link>
      <h3 className="header">User Info</h3>
      <UserInfo text={props.match.params.text} />
      <h3 className="header">Link to Repositories</h3>
      <RepoList />
    </>
  );
};

export default UserDetail;
