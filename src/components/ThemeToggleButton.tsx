import React, { useState, useEffect } from "react";
import "./style.css";

const ThemeToggleButton: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        if (theme === "light") {
            document.documentElement.classList.replace("theme-light", "theme-dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.replace("theme-dark", "theme-light");
            setTheme("light");
        }
    };

    // match initial with system theme
    useEffect(() => {
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        if (prefersLight) {
            document.documentElement.classList.add("theme-light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("theme-dark");
            setTheme("dark");
        }
    }, []);

    return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    );
};

export default ThemeToggleButton;