import React from 'react';
import Searchbox from './Searchbox';

const Navbar = ({ title }) => {
  return (
    <div style={{ borderBottom: '2px solid black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>{title}</h1>
      <Searchbox />
    </div>
  );
};

export default React.memo(Navbar);
