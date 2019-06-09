import React, { useContext } from 'react';
import { GithubContext } from '../../contexts/github/GithubState';
import { Link } from 'react-router-dom';

import Loader from '../layouts/Loader';

const UserItem = () => {
  const { users } = useContext(GithubContext);

  const renderUsers = () => {
    if (users) {
      return users.map(user => (
        <div className="center aligned four wide column" key={user.id}>
          <div className="ui card">
            <div className="image">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="content">
              <div className="header">{user.login}</div>
            </div>
            <Link
              className="ui bottom attached button"
              to={`/user/${user.login}`}>
              <i className="add icon" />
              More
            </Link>
          </div>
        </div>
      ));
    }
    return <Loader text="Loading" />;
  };
  return <>{renderUsers()}</>;
};

export default UserItem;
