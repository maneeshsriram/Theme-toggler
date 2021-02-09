import { useState } from 'react';
import HeroSection from './Components/HeroSection';
import Context from './Context/ThemeContext'

function App() {
  const themeHook = useState("light")
  return (
    <div className="App">
      <Context.Provider value={themeHook}>
        <HeroSection />
      </Context.Provider>
    </div>
  );
}

export default App;
