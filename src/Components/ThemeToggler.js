import React, { useContext } from 'react'
import Context from '../Context/ThemeContext'

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(Context)

    return (
        <div>
            <h1>{theme} mode</h1>
            <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }} style={{ padding: "1rem", fontSize: "1.2rem", outline: "none", border: "none", backgroundColor: "yellow" }}>
                {theme === "light" ? "Switch off the lights" : "Turn on the lights"}
            </button>
        </div>
    )
}

export default ThemeToggler
