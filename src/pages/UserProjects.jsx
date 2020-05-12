import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams, Link, useRouteMatch } from 'react-router-dom';

const UserProjects = () => {
  const [repos, setRepos] = useState([]);
  const { username } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    const fetchRepos = async () => {
      const resp = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
      if (!resp.ok) {
        alert(resp.statusText);
        return;
      }
      const data = await resp.json();
      setRepos(data);
    };
    fetchRepos();
  }, [username]);

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
