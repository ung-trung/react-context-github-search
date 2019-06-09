import React, { useContext } from 'react';
import Loader from '../../components/layouts/Loader';
import { GithubContext } from '../../contexts/github/GithubState';

const UserInfo = props => {
  const { user } = useContext(GithubContext);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable
  } = user;

  const renderUser = () => {
    if (user) {
      if (login === props.text) {
        return (
          <>
            <div className="ui segment">
              <div className="ui grid">
                <div className="row">
                  <div className="five wide column">
                    <div className="ui fluid card">
                      <div className="image">
                        <img src={avatar_url} alt={name} />
                      </div>
                      <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">
                          {location && location}
                        </div>
                      </div>
                      <div className="extra content">
                        Hireable:{' '}
                        {hireable ? (
                          <i className="green check icon" />
                        ) : (
                          <i className="red close icon" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="eleven wide column">
                    {bio && (
                      <>
                        <h3 className="header">Bio</h3> <p>{bio}</p>
                      </>
                    )}
                    <a href={html_url} className="ui button">
                      Visit Github Profile
                    </a>

                    <div className="ui list">
                      {login && (
                        <div className="item">
                          <div className="header">Username: {login}</div>
                        </div>
                      )}
                      {company && (
                        <div className="item">
                          <div className="header">Company: {company}</div>
                        </div>
                      )}
                      {blog && (
                        <div className="item">
                          <div className="header">Website: {blog}</div>
                        </div>
                      )}
                    </div>
                    <div className="ui section divider" />

                    <div className="ui list">
                      <div className="item">
                        <div className="ui labeled button">
                          <div className="ui red button">Follower</div>
                          <div className="ui basic red left pointing label">
                            {followers}
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="ui labeled button">
                          <div className="ui  blue button">Following</div>
                          <div className="ui basic left pointing blue label">
                            {following}
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui labeled button">
                          <div className="ui green button">Public Repos</div>
                          <div className="ui basic green left pointing label">
                            {public_repos}
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="ui labeled button">
                          <div className="ui grey button">Public Gists</div>
                          <div className="ui basic grey left pointing label">
                            {public_gists}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
    return <Loader text="Loading..." />;
  };
  return <>{renderUser()}</>;
};

export default UserInfo;
