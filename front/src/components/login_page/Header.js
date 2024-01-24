import React from "react";

const Header = ({ name, group, variant }) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div class="container text-center">
          <h1 className="container navbar-brand">
            {name}, {group}, Вариант №{variant}
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
