import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../user/UserProvider"
import "./NavBar.css"

export const NavBar = (props) => {
    const {users, getUsers} = useContext(UserContext)
    
    useEffect(
        () => {
            getUsers()
        },
        [])
        
        return (
            <ul className="navbar">
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
    )
}


