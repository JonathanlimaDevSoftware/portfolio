import { href, Link, useLocation } from "react-router-dom";
import "../../styles/components/_navbar.scss";
import BtnMenu from "../button/BtnMenu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para verificar se o link está ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => (window.location.href = "/")}>
        Jonathan Lima
      </div>


      <ul className="navbar__links">
        <li>
          <Link to="/" className={isActive("/") ? "isActive" : ""}>Início</Link>
        </li>
        <li>
          <Link to="/projetos" className={isActive("/projetos") ? "isActive" : ""}>Projetos</Link>
        </li>
        <li>
          <Link to="/sobre" className={isActive("/sobre") ? "isActive" : ""}>Sobre</Link>
        </li>
        <li>
          <Link to="/contato" className={isActive("/contato") ? "isActive" : ""}>Contato</Link>
        </li>
      </ul>

      {/* Botão hamburguer */}
      <BtnMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Menu que aparece quando o botão hamburguer é clicado */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar__links">
          <li>
            <Link to="/" className={isActive("/") ? "isActive" : ""}>Início</Link>
          </li>
          <li>
            <Link to="/projetos" className={isActive("/projetos") ? "isActive" : ""}>Projetos</Link>
          </li>
          <li>
            <Link to="/sobre" className={isActive("/sobre") ? "isActive" : ""}>Sobre</Link>
          </li>
          <li>
            <Link to="/contato" className={isActive("/contato") ? "isActive" : ""}>Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
