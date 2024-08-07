import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../user/UserProvider";
import "./NavBar.css";
import backgroundImage from './camo.png';

export const NavBar = (props) => {
  const { users, getUsers } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch users if not already fetched
    if (users.length === 0) {
      getUsers();
    } else {
      // Check user ID and set current user
      const userId = localStorage.getItem("vocal_user"); // userId as string
      const user = users.find(u => u.id === userId); // Compare as strings
      setCurrentUser(user);
    }
  }, [users, getUsers]);

  return (
    <Navbar bg="light" expand="lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar.Brand href="#home"><h1 className="navtitle">VOCAL BOOTCAMP</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/user" className="navbar__link">
            {currentUser ? currentUser.name : "Loading..."} {/* Display user name or loading */}
          </Link>
          <Link to="/goals" className="navbar__link">Goals</Link>
          <Link to="/login" className="navbar__link" onClick={() => localStorage.removeItem("vocal_user")}>
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};




