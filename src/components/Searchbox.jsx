import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbox = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/${username}`);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="search-form">
      <input type="text" placeholder="Github username..." onChange={(e) => setUsername(e.target.value)} required data-testid="search-box" />
    </form>
  );
};

export default React.memo(Searchbox);
