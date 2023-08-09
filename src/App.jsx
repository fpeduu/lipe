import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Aboutme from "./pages/sobre-mim";
import Secret from "./pages/segredo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<Aboutme />} />
        <Route path="/segredo" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
