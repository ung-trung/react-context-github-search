import React from 'react';

const RepoItem = props => {
  const { repo } = props;
  console.log(repo);

  return (
    <div className="fluid ui card">
      <div className="content">
        <div className="header">{repo.name}</div>
        <div className="description">{repo.description}</div>
      </div>
      <div className="extra content">
        Link:{' '}
        <a className="" href={repo.html_url}>
          {repo.html_url}
        </a>
      </div>
    </div>
  );
};

export default RepoItem;
