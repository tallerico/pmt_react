import React from 'react';

const Nav = () => {
  return (
    <div className="navbar">
      <h1>Product Management Tool</h1>
      <div className="link_container">
        <a href="/products">Products</a>
        <a href="/">Add Products</a>
      </div>
    </div>
  );
};

export default Nav;
