import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Project";
import Sobre from "../pages/About";
import Navbar from "../components/navbar/Navbar";
import  Footer  from "../components/footer/Footer";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
