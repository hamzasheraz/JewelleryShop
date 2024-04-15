import React from "react";

const Search = () => {
  return (
    <li className="dropdown search dropdown-slide">
      <a
        href="#!"
        className="dropdown-toggle"
        data-toggle="dropdown"
        data-hover="dropdown"
      >
        <i className="tf-ion-ios-search-strong"></i> Search
      </a>
      <ul className="dropdown-menu search-dropdown">
        <li>
          <form action="post">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
            />
          </form>
        </li>
      </ul>
    </li>
  );
};

export default Search;
