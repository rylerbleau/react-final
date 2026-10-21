
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');


    function toggleTheme() {
        console.log("changing theme")
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }


    return (
        <ThemeContext.Provider 
            value={{ 
                theme, 
                toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const UseTheme = () => {
    return useContext(ThemeContext);
}
