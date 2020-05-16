import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { Store } from '../store/index';
import { fetchMarkdown } from '../store/actions/githubAction';

const Project = () => {
  const {
    state: { readme },
    dispatch,
  } = useContext(Store);

  const { project, username } = useParams();

  useEffect(() => {
    dispatch(fetchMarkdown(username, project));
  }, [username, project, dispatch]);

  return (
    <div>
      <Navbar title={project} />
      <div dangerouslySetInnerHTML={{ __html: readme }} />
    </div>
  );
};

export default React.memo(Project);
