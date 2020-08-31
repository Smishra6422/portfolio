import React, { useState, useContext } from "react";
import "./navbar.style.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/theme.context";
import Logo from "../../asset/images/shuLogo.svg";

const Navbar = () => {
  const [flag, setFlag] = useState(false);

  const displayNavbar = () => {
    setFlag(!flag);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar-container hh">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} className="App-logo" alt="logo" />
        </Link>
        <Link>
          {/* <i class="fas fa-ellipsis-h"></i>s */}
          <i class="fas fa-bars" onClick={displayNavbar}></i>
          {/* <img src={Menu} alt="Menu_Icon"  /> */}
        </Link>
      </div>
      <div className={flag ? "navbar-lnks" : "hide-navbar-links"}>
        <ul className="navbar-item">
          <li className="navbar-item-list">
            <Link to="/project">Projects</Link>
          </li>
          <li className="navbar-item-list">
            <Link to="/certificate">Certificate</Link>
          </li>
          <li className="navbar-item-list">
            <Link to="/about">About</Link>
          </li>
          {theme === "dark" && (
            <li className="navbar-item-list">
              <Link title="Light Theme" onClick={() => toggleTheme("light")}>
                <i class="far fa-sun"></i>
              </Link>
            </li>
          )}
          {theme === "light" && (
            <li className="navbar-item-list">
              <Link title="Dark Theme" onClick={() => toggleTheme("dark")}>
                <i class="fas fa-moon"></i>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
