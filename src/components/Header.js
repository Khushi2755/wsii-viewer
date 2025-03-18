import React from 'react';

const Header = () => {
  const date = new Date().toLocaleString();

  return (
    <div className="header">
      <h2>{date}</h2>
    </div>
  );
};

export default Header;
