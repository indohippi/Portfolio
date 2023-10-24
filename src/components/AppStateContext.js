import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const useAppState = () => {
    return useContext(AppStateContext);
}

export const AppStateProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('summary');

    const contextValue = {
        activeTab,
        setActiveTab
    };

    return (
        <AppStateContext.Provider value={contextValue}>
            {children}
        </AppStateContext.Provider>
    );
}
