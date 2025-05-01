import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ContactScreen from "./Screen/ContactScreen";
import EurostarScreen from "./Screen/EurostarScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/eurostar" element={<EurostarScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
