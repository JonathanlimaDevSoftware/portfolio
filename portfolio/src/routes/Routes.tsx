import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Project";
import Sobre from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
