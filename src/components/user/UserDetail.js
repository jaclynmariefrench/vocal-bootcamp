import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"

export const UserDetail = () => {
    const {users, getUsers} = useContext(UserContext)

    useEffect(
        () => {
            getUsers()
        },
        [])

    return (
        <>
            {users.map(
                u => {
                    if (u.id === parseInt(localStorage.getItem("vocal_user")))
                        {
                            return (u.name)
                        }
                })
            }
        </>
    )
}