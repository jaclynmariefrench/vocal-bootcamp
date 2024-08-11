import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";
import axios from "axios";
import "./NavBar.css";
import backgroundImage from './camo.png';

export const NavBar = (props) => {
  const { users, getUsers } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch users if not already fetched
    if (users.length === 0) {
      getUsers();
    } else {
      // Check user ID and set current user
      const userId = localStorage.getItem("vocal_user");
      const user = users.find(u => u.id.toString() === userId);
      setCurrentUser(user);
    }
  }, [users, getUsers]);

  const handleLogout = async () => {
    const sessionID = localStorage.getItem("sessionID");
    if (sessionID) {
      try {
        // Fetch the session data
        const sessionResponse = await axios.get(
          `http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionID}`
        );
        const session = sessionResponse.data;
  
        // Delete associated notes
        if (session.notes && session.notes.length > 0) {
          await Promise.all(
            session.notes
              .filter(noteId => noteId !== null) // Filter out null values
              .map(async (noteId) => {
                try {
                  await axios.delete(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${noteId}`);
                } catch (error) {
                  console.error(`Error deleting note ${noteId}:`, error);
                }
              })
          );
        }
  
        // Delete associated warm-ups
        if (session.warmUps && session.warmUps.length > 0) {
          await Promise.all(
            session.warmUps
              .filter(warmUpId => warmUpId !== null) // Filter out null values
              .map(async (warmUpId) => {
                try {
                  await axios.delete(`http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator/${warmUpId}`);
                } catch (error) {
                  console.error(`Error deleting warm-up ${warmUpId}:`, error);
                }
              })
          );
        }
  
        // Delete the session
        await axios.delete(`http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionID}`);
      } catch (error) {
        console.error("Error during session cleanup:", error);
      }
    }
  
    // Remove user and session data from local storage
    localStorage.removeItem("vocal_user");
    localStorage.removeItem("sessionID");
    setCurrentUser(null);
    history.push("/login");
  };

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
          <Link to="/login" className="navbar__link" onClick={handleLogout}>
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};




