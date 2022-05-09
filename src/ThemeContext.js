import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext)
    // const [darkTheme, setDarkTheme] = useState(true);
}
export function useThemeUpdate() {
    return useContext(useThemeUpdate)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);
    return useContext(useThemeUpdate)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (

    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}    
        </ThemeUpdateContext.Provider>
    </ ThemeContext.Provider>

    )
}
    
