import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ContactScreen from "./Screen/ContactScreen";
import EurostarScreen from "./Screen/EurostarScreen";
import FinoScreen from "./Screen/FinoScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/eurostar" element={<EurostarScreen />} />
          <Route path="/fino" element={<FinoScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
