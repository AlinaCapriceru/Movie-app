import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Moviebase</Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/"> My Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">History</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + add new
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
