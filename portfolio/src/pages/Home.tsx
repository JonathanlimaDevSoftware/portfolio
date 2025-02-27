import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons"


import Avatar from '../assets/img/profile04.jpeg';
import ProfileImage from "../components/imagem/Img";
import SocialIcons from "../components/social-icons/SocialIcons";
import DownloadButton from "../components/button/BtnDownlod";

import { Link } from "react-router-dom";

import React from 'react';
import '../styles/components/_intro-text.scss';




const Home = () => {

 
  





  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <section  className="intro ">
     
          <div className="intro-text">
            <h1>Olá, Bem-vindo</h1>
      

            <p>
              Sou um desenvolvedor iniciante com uma grande paixão por tecnologia, focado principalmente no desenvolvimento web. Estou começando minha <span className="intro-text__detail">jornada com entusiasmo</span>, aprendendo a criar interfaces dinâmicas e funcionais utilizando HTML, CSS, JavaScript, React e outras ferramentas. 
            </p>

          </div>

          
          <div className="div-button">
            <DownloadButton fileName={"programador-currículo"} filePath={"../doc/"}/>

            <Link to="/projetos" className="btn btn-link" > <FontAwesomeIcon icon={faPersonDigging} /> projetos</Link>
          </div>

          

          <ProfileImage  class="profile-img" altText="foto programador"  imgSrc={Avatar}/>

          <SocialIcons 
          githubUrl="https://github.com/JonathanlimaDevSoftware"
          gmailUrl="jonathan.lima.devsoftware@gmail.com?subject=Contato%20Profissional&body=Olá%20Jonathan,%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!"
          linkedinUrl="https://www.linkedin.com/in/jonathan-lima-4035b3342/"
          whatsappUrl="5511995295245"
          />
      </section>
    </motion.section>
  );
};

export default Home;
