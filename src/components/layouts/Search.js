import React, { useState, useContext } from 'react';
import { GithubContext } from '../../contexts/github/GithubState';

const Search = () => {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const onSubmit = e => {
    e.preventDefault();
    searchUsers(text);
  };

  return (
    <div className="ui relaxed two column center aligned grid">
      <div className="column">
        <form onSubmit={onSubmit} className="ui large form">
          <div className="field">
            <input
              type="text"
              name="text"
              placeholder="Enter username..."
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
          </div>
          <button className="fluid blue ui submit button"> Search </button>

          {users.length > 0 ? (
            <>
              <div className="ui divider" />
              <button
                className="fluid red ui submit button"
                onClick={clearUsers}>
                Clear
              </button>
            </>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Search;
