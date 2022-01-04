import React from "react";
import Search from "./Search";

function Header({onSeachSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSeachSubmit={onSeachSubmit}/>
    </header>
  );
}

export default Header;
