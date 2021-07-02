import React, { useContext, useEffect } from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../user/UserProvider";
import "./NavBar.css";

export const NavBar = (props) => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" ><h1 className="navtitle">VOCAL BOOTCAMP</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="#user" to="/user" className="navbar__link">{ users.map(
                u => {
                    if (u.id === parseInt(localStorage.getItem("vocal_user")))
                    {
                        return (u.name)
                    }
                })
            }</Link>
          <Link href="#goals" to="/goals" className="navbar__link">Goals</Link>
          <Link href="#link" to="/login" className="navbar__link" onClick={()=> parseInt(localStorage.removeItem("vocal_user")) }>Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};



{
  /* <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/user">{ users.map(
                u => {
                    if (u.id === parseInt(localStorage.getItem("vocal_user")))
                    {
                        return (u.name)
                    }
                })
            }</Link>
            
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/goals">goals</Link>
            </li>
            <li className="navbar__item active">
            <Link className="navbar__link" to="/login" onClick={()=> parseInt(localStorage.removeItem("vocal_user")) }>logout</Link>
            </li>
        </ul>
    ) */
}
