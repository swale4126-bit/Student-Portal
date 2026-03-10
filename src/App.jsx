// Import routing tools from react-router-dom
import { Routes, Route } from "react-router-dom";

// Import your pages
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    // Routes is like a container for all route definitions
    <Routes>

      {/* 
        When URL is "/" 
        Show Login component
      */}
      <Route path="/" element={<Login />} />

      {/* 
        When URL is "/dashboard"
        Show Dashboard component
      */}
      <Route path="/dashboard/*" element={<Dashboard />} />

    </Routes>
  );
}

// Export App component
export default App;
