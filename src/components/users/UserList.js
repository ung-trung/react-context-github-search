import React, { useEffect, useContext } from 'react';
import UserItem from './UserItem';
import Search from '../layouts/Search';

import { GithubContext } from '../../contexts/github/GithubState';

const UserList = () => {
  const { users, getUsers } = useContext(GithubContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <Search />
      {users.length > 0 ? <div className="ui divider" /> : null}
      <div className="ui stackable grid container">
        {' '}
        <UserItem />{' '}
      </div>
    </>
  );
};

export default UserList;
