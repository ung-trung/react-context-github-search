import React from 'react';

const RepoItem = props => {
  const { repo } = props;
  console.log(repo);

  return (
    <div className="ui segment">
      <a className="fluid ui button " href={repo.html_url}>
        {repo.name}
      </a>
    </div>
  );
};

export default RepoItem;
