import React from "react";

const Header = ({ name, group, variant }) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="container navbar-brand text-center">
          {name}, {group}, Вариант №{variant}
        </h1>
      </nav>
    </header>
  );
};

export default Header;
