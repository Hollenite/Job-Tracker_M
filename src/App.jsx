import Navbar from "./components/Navbar";
import "./App.css";
import Applications from "./components/Applications";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/analysis" element={<div>Analysis Page</div>} />
      </Routes>
    </>
  );
}

export default App;
