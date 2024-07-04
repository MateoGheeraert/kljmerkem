import React from "react";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" style={{ width: 60 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/activiteiten">
                Activiteiten
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/fotos">
                Foto's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/evenementen">
                Evenementen
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bestuur">
                Bestuur
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
