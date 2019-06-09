import React, { useContext, useEffect } from 'react';
import Loader from '../../components/layouts/Loader';

import { GithubContext } from '../../contexts/github/GithubState';

const UserDetail = props => {
  const { getUser, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(props.match.params.text);
  }, [getUser, props]);

  const renderUser = () => {
    if (user) {
      if (user.login === props.match.params.text) {
        return <div>{user.login}</div>;
      }
    }
    return <Loader text="Loading..." />;
  };
  return <>{renderUser()}</>;
};

export default UserDetail;
