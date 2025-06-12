import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ContactScreen from "./Screen/ContactScreen";
import EurostarScreen from "./Screen/EurostarScreen";
import FinoScreen from "./Screen/FinoScreen";
import EcoScreen from "./Screen/EcoScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/eurostar" element={<EurostarScreen />} />
          <Route path="/fino" element={<FinoScreen />} />
          <Route path="/eco" element={<EcoScreen />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
