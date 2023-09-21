import React from "react";
import { Link } from "react-router-dom";
const MainBody = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex">
            <h2 style={{ margin: "5px 20px" }}>Galleria</h2>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
            <form className="d-flex w-50 mx-auto" role="search">
              <input
                className="form-control me-2 text-light one"
                type="search"
                placeholder="What do you want to see"
                aria-label="Search"
                style={{ background: "transparent" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item ">
                <Link to="/"
                  className="nav-link active "
                  aria-current="page"
              
                >
                  Sign Out
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainBody;
