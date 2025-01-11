import "./App.css";
import { Route, Routes } from "react-router-dom";

// Sidebar Component
import Sidebar from "./components/Sidebar";

// Page Components
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="grid lg:grid-cols-[auto,1fr] grid-rows-[auto,1fr] h-screen">
      <div className="flex">
        <Sidebar />
      </div>

      {/* Content Routings */}
      <div className="flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="day-one" element={<h1>day one</h1>} />
          <Route path="day-two" element={<h1>day two</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
