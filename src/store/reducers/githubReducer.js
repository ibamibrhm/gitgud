export const initialState = {
  repos: [],
  readme: '',
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_SUCCESS':
      return {
        ...state,
        repos: action.payload,
      };
    case 'FETCH_REPOS_FAILED': {
      return {
        ...state,
        repos: [],
      };
    }
    case 'FETCH_MARKDOWN_SUCCESS': {
      return {
        ...state,
        readme: action.payload,
      };
    }
    case 'FETCH_MARKDOWN_FAILED': {
      return {
        ...state,
        readme: action.error,
      };
    }
    default:
      return state;
  }
};

export default githubReducer;
