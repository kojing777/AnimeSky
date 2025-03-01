import React from "react";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom"
const Navbar = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid px-2 mx-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand text-danger fw-bold fs-3 py-2 px-3"
            to="/"
          >
            H!Anime
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/new">
                  New
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/popular">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/completed">
                  Completed
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/adventure">
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comedy">
                      Comedy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Games"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Games
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/news">
                      All News
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/top-10">
                      Award
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events">
                      Event & Conventions
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

           


          </div>
          <form className={`search-form ${showSearch ? "active" : ""}`}>
                <input
                  className={`form-control search-input ${showSearch ? "show" : ""}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-link text-white search-icon"
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>

        
          <Link to="/login" className="btn btn-outline-light">
                <i className="fas fa-sign-in-alt me-2"></i>
                Log In
              </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;