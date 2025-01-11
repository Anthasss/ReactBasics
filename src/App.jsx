import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";

// Sidebar Component
import Sidebar from "./components/Sidebar";

// Page Components
import HomePage from "./pages/HomePage";
import ThemeChangerPage from "./pages/ThemeChangerPage";

// Contexts
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(`theme = ${theme}`);
  }, [theme]);
  return (
    <div className="grid lg:grid-cols-[auto,1fr] grid-rows-[auto,1fr] h-screen" data-theme={theme}>
      <div className="flex">
        <Sidebar />
      </div>

      {/* Content Routings */}
      <div className="flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="day-one" element={<ThemeChangerPage />} />
          <Route path="day-two" element={<h1>day two</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
