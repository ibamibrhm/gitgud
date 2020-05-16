import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { Store } from '../store/index';
import { fetchRepos } from '../store/actions/githubAction';

const UserProjects = () => {
  const {
    state: { repos },
    dispatch,
  } = useContext(Store);

  const { username } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    dispatch(fetchRepos(username));
  }, [username, dispatch]);

  return (
    <div>
      <Navbar title={`${username} projects`} />
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} data-testid="list-project">
            <Link to={`${url}/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(UserProjects);
