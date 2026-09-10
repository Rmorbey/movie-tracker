import React, { useState, useContext, createContext } from "react";

const ShowImageContext = createContext();

export const ShowImageProvider = ({ children }) => {
    const [shows, setShows] = useState([]);

    return (
        <ShowImageContext.Provider value={{ shows, setShows }}>
            {children}
        </ShowImageContext.Provider>
    );
};

export const useShowImage = () => useContext(ShowImageContext);
