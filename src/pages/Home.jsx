import React from 'react';
import Searchbox from '../components/Searchbox';

const Home = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h3>Github Username</h3>
      <Searchbox />
    </div>
  );
};

export default React.memo(Home);
