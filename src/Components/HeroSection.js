import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'
import ThemeToggler from './ThemeToggler'

const HeroSection = () => {

    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return (
        <div style={{ textAlign: "center", height: "100vh", padding: "37vh", backgroundColor: `${currentTheme.backgroundColor}`, color: `${currentTheme.color}` }}>
            <ThemeToggler />
            <h1>CONTEXT API THEME-TOGGLER</h1>
            <p>Dark, Light - Theme switching app</p>
        </div>
    )
}

export default HeroSection
