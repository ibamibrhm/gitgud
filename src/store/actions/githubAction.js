import ErrorHandler from '../../utils/errorHandler';
import Showdown from 'showdown';

export const fetchRepos = async (username) => {
  const resp = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  if (!resp.ok) {
    alert(resp.statusText);
    throw new ErrorHandler(resp, 'FETCH_REPOS_FAILED');
  }
  const data = await resp.json();
  return {
    type: 'FETCH_REPOS_SUCCESS',
    payload: data,
  };
};

export const fetchMarkdown = async (username, project) => {
  const resp = await fetch(`https://api.github.com/repos/${username}/${project}/readme`);
  if (!resp.ok) {
    alert(resp.statusText);
    throw new ErrorHandler(resp.statusText, 'FETCH_MARKDOWN_FAILED');
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
  return {
    type: 'FETCH_MARKDOWN_SUCCESS',
    payload: html,
  };
};
