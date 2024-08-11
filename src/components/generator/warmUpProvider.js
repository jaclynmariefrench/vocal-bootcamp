import React, { useState, createContext } from "react";

export const WarmUpContext = createContext();

export const WarmUpProvider = (props) => {
    const [warmUps, setWarmUps] = useState([]);

    const getWarmUps = async () => {
        const response = await fetch("http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator");
        const data = await response.json();
        setWarmUps(data);
    };

    const addWarmUp = async (warmUpObj) => {
        console.log("Adding warm-up:", warmUpObj); // Debugging line

        const response = await fetch("http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(warmUpObj)
        });

        if (!response.ok) {
            console.error("Failed to add warm-up:", response.statusText); // Debugging line
            return;
        }

        const responseData = await response.json();
        console.log("Response from server:", responseData); // Debugging line

        await getWarmUps();
    };

    const deletePreset = userId => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator/${userId}`, {
            method: "DELETE"
        })
            .then(getWarmUps);
    };

    return (
        <WarmUpContext.Provider value={{
            warmUps, getWarmUps, addWarmUp, deletePreset
        }}>
            {props.children}
        </WarmUpContext.Provider>
    );
};