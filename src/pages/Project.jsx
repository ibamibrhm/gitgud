import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Showdown from 'showdown';

const Project = () => {
  const [readme, setReadme] = useState('');
  const { project, username } = useParams();

  useEffect(() => {
    const fetchMarkdown = async () => {
      const resp = await fetch(`https://api.github.com/repos/${username}/${project}/readme`);
      if (!resp.ok) {
        setReadme(resp.statusText);
        return;
      }
      const data = await resp.json();
      const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        openLinksInNewWindow: true,
        tasklists: true,
        emoji: true,
      });
      converter.setFlavor('github');
      const html = converter.makeHtml(atob(data.content));
      setReadme(html);
    };
    fetchMarkdown();
  }, [username, project]);

  return (
    <div>
      <Navbar title={project} />
      <div dangerouslySetInnerHTML={{ __html: readme }} />
    </div>
  );
};

export default React.memo(Project);
