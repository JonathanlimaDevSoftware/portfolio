import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Tipagem do ícone
import "../../styles/components/_btn.scss";

interface LinkButtonProps {
  href: string; // URL para onde o link vai direcionar
  children: React.ReactNode; // Texto do botão
  icon: IconDefinition; // Ícone que será mostrado no botão
  className?: string; // Classe opcional para personalização
}

const BtnLink: React.FC<LinkButtonProps> = ({ href, children, icon, className = "" }) => {
  return (
    <a href={href} target="_parent" rel="noopener noreferrer" className={`btn ${className}`}>
      <FontAwesomeIcon icon={icon} /> {/* Ícone passado como prop */}
      {children}
    </a>
  );
};

export default BtnLink;
/* 
<FontAwesomeIcon icon={icon} /> 

*/