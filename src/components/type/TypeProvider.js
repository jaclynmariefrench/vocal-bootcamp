import React, { useState, createContext } from "react";

export const TypeContext = createContext();

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([]);

    const getTypes = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/voiceTypeNames")
            .then(res => res.json())
            .then(data => setTypes(data));
    };

    const addType = async (typeObj) => {
        const sessionId = localStorage.getItem("sessionID");
        if (!sessionId) {
            console.error("No session ID found in localStorage");
            return;
        }

        const typeObjWithSession = { ...typeObj, sessionId };

        const response = await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObjWithSession)
        });

        if (!response.ok) {
            console.error("Failed to add type:", response.statusText);
            return;
        }

        const newType = await response.json(); // Get the newly created type with its ID

        await getTypes();

        // Update session with new type
        const sessionResponse = await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionId}`);
        const session = await sessionResponse.json();
        await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                warmUps: [...session.warmUps, newType.id] // Add the new type ID to the session
            })
        });
    };

    const addEditType = async (typeObj) => {
        const sessionId = localStorage.getItem("sessionID");
        if (!sessionId) {
            console.error("No session ID found in localStorage");
            return;
        }

        const typeObjWithSession = { ...typeObj, sessionId };

        console.log("Editing type with session ID:", typeObjWithSession); // Debugging line

        const response = await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator/${typeObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObjWithSession)
        });

        if (!response.ok) {
            console.error("Failed to edit type:", response.statusText);
            return;
        }

        await getTypes();
    };

    return (
        <TypeContext.Provider value={{
            types, getTypes, setTypes, addType, addEditType
        }}>
            {props.children}
        </TypeContext.Provider>
    );
};