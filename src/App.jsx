import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ContactScreen from "./Screens/ContactScreen";
import EurostarScreen from "./Screens/EurostarScreen";
import FinoScreen from "./Screens/FinoScreen";
import EcoScreen from "./Screens/EcoScreen";
import TermsConditionsScreen from "./Screens/TermsConditionsScreen";
import CookiePolicyScreen from "./Screens/CookiePolicyScreen";
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
          <Route path="/terms&conditions" element={<TermsConditionsScreen />} />
          <Route path="/cookiepolicy" element={<CookiePolicyScreen />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
