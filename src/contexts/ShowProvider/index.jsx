import React, { useState, useContext, createContext } from "react";

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
    const [showData, setShowData] = useState([]);

    return (
        <ShowContext.Provider value={{ showData, setShowData }}>
            {children}
        </ShowContext.Provider>
    );
};

export const useShow = () => useContext(ShowContext);
