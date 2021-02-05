import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div>
            <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }} style={{ padding: "1rem", fontSize: "1.2rem", outline: "none", border: "none", backgroundColor: "yellow" }}>
                {theme === "light" ? "Switch off the lights" : "Turn on the lights"}
            </button>
        </div>
    )
}

export default ThemeToggler
