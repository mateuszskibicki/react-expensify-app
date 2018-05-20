import React from 'react';

const Header = (props) => (
    <div>
      <h1>Indecision</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>
);

export default Header;