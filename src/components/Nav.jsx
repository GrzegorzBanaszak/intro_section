import React from "react";
import "../style/Nav.css";
import logo from "../images/logo.svg";
import open from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import planning from "../images/icon-planning.svg";
import reminders from "../images/icon-reminders.svg";
import { useState } from "react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [features, setFeatures] = useState(false);
  const [company, setComapny] = useState(false);

  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <img
          className="nav-toggle"
          src={isMenuOpen ? close : open}
          alt="Open"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      {isMenuOpen && <div className="nav-overlay"></div>}
      <div
        className={isMenuOpen ? "nav-menu menu-open" : "nav-menu menu-close"}
      >
        <ul className="nav-list">
          <li className="nav-element">
            <p
              className="element-header"
              onClick={() => setFeatures((prev) => !prev)}
            >
              Features <img src={features ? arrowUp : arrowDown} alt="arrow" />
            </p>
            {features && (
              <ul className="element-submenu">
                <li className="submenu-element">
                  <img src={todo} alt="todo" />
                  Todo List
                </li>
                <li className="submenu-element">
                  <img src={calendar} alt="calendar" />
                  Calendar
                </li>
                <li className="submenu-element">
                  <img src={reminders} alt="calendar" />
                  Reminders
                </li>
                <li className="submenu-element">
                  <img src={planning} alt="calendar" />
                  Planning
                </li>
              </ul>
            )}
          </li>
          <li className="nav-element">
            <p
              className="element-header"
              onClick={() => setComapny((prev) => !prev)}
            >
              Company <img src={company ? arrowUp : arrowDown} alt="arrow" />
            </p>
            {company && (
              <ul className="element-submenu">
                <li className="submenu-element">History</li>
                <li className="submenu-element">Our Team</li>
                <li className="submenu-element">Blog</li>
              </ul>
            )}
          </li>
          <li className="nav-element">Careers</li>
          <li className="nav-element">About</li>
        </ul>
        <div className="nav-btns">
          <a className="nav-btn" href="/login">
            Login
          </a>
          <a className="nav-btn" href="/register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
