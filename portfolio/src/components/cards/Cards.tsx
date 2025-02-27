import React from "react";
import BtnLink from "../button/BtnLinks";
import { faPager, faBuilding } from "@fortawesome/free-solid-svg-icons";

interface TextProps {
  img_url?: string;
  alt?: string
  title?: string;
  paragraph?: string;
  btn_link?: string
}




export const Cards: React.FC<TextProps> = ({ img_url, title, paragraph, alt }) => {
  return (
    <figure className="card">
      {/* Imagem do projeto */}
      <img className="preview-img" src={img_url} alt={alt} />

      <figcaption className="card__text">
        <h2 className="name-project">{title}</h2>
        <p className="description-project">{paragraph}</p>
      </figcaption>

      <div className="btn-container">
        <BtnLink href="" className="btn-card" icon={faPager}>
          Preview
        </BtnLink>
        <BtnLink href="#" className="btn-card" icon={faBuilding}>
          Done
        </BtnLink>
      </div>
    </figure>
  );
};
