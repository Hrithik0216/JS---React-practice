import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  console.log("Navbar component is rendered");

  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Home
          </NavLink>
        </li>
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/about"
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            About
          </NavLink>
        </li>
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/users"
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Users
          </NavLink>
        </li>
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/contact"
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Contact
          </NavLink>
        </li>
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/settings"
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Settings
          </NavLink>
        </li>
        <li style={{ margin: "0 10px" }}>
          <NavLink
            to="/posts"
            activeClassName="active"
            style={{ color: "#fff", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
