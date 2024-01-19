import React from 'react';

const Header = ({name, group, variant}) => {
  return (
    <header >
        <h1>{name}, {group},  Вариант №{variant}</h1>
    </header>
  )
};

export default Header;