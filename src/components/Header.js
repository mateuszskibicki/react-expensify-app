import React from 'react';

const Header = (props) => (
    <div className="header">
      <div className="container">
        <h1 className="header__title">Indecision</h1>
        <h2 className="header__subtitle">{props.title}</h2>
      </div>
    </div>
);

export default Header;