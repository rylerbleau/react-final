import { UseTheme } from "../global/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = UseTheme();

  console.log("ThemeToggle rendered:", theme);

    return (
         <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle light/dark mode"
        >
            <span>☀️</span>
            <span className={`toggle-track ${theme}`}>
                <span className="toggle-thumb" />
            </span>
            <span>🌙</span>
        </button>
    );
}

export default ThemeToggle