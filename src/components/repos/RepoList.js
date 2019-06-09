import React, { useContext } from 'react';
import { GithubContext } from '../../contexts/github/GithubState';
import RepoItem from './RepoItem';

const RepoList = () => {
  const { repos } = useContext(GithubContext);

  return (
    <>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </>
  );
};

export default RepoList;
