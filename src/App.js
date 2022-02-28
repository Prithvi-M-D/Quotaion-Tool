import Login from "./pages/login";
import VendorDash from "./pages/vendordash";
import Client from "./pages/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/vendordashboard" element={<VendorDash />} />
          <Route exact path="/client" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
