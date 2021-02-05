import { useState } from 'react';
import HeroSection from './Components/HeroSection';
import ThemeContext from './Context/ThemeContext'

function App() {
  const themeHook = useState("light")
  return (
    <div className="App">
      <ThemeContext.Provider value={themeHook}>
        <HeroSection />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
