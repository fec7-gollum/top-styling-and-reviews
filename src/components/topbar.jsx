import React from 'react';

const TopBar = ({ menu, search }) => (
  <div className="topRow">
    <img className="topIcons" src={menu} alt={menu} />
    <span className="foodie">FOODIE</span>
    <span className="right">
      <a href=" " className="recipes">RECIPES</a>
      <a href=" " className="login">LOGIN</a>
      <img className="topIcons search" src={search} alt={search} />
    </span>
  </div>
);

export default TopBar;
