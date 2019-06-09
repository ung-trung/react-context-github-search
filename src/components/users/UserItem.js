import React from 'react';
import { Link } from 'react-router-dom';

const renderUsers = user => {
  return (
    <div className="center aligned four wide column">
      <div className="ui card">
        <div className="image">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="content">
          <div className="header">{user.login}</div>
        </div>
        <Link className="ui bottom attached button" to={`/user/${user.login}`}>
          <i className="add icon" />
          More
        </Link>
      </div>
    </div>
  );
};

const UserItem = props => {
  const { user } = props;

  return <>{renderUsers(user)}</>;
};

export default UserItem;
