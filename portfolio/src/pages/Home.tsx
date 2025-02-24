import { motion } from "framer-motion";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons"
import Avatar from '../assets/img/profile04.jpeg';
import DownloadButton from "../components/button/BtnFileDownlod";
import ProfileImage from "../components/imagem/Img";
import SocialIcons from "../components/social-icons/SocialIcons";
import BtnLink from "../components/button/BtnLinks";
import '../styles/components/_intro-text.scss';
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <section id="intro" className="intro">
     
          <div className="intro-text">
            <h1>Olá, Bem-vindo</h1>
            
            <p>
              Sou um desenvolvedor iniciante com uma grande paixão por tecnologia, focado principalmente no desenvolvimento web. Estou começando minha <span className="intro-text__detail">jornada com entusiasmo</span>, aprendendo a criar interfaces dinâmicas e funcionais utilizando HTML, CSS, JavaScript, React e outras ferramentas. 
            </p>

            <p>
              Acredito que cada linha de <span className="intro-text__detail">código é uma oportunidade de crescimento</span>, e estou empolgado para continuar aprendendo e me desafiando em novos projetos. Meu objetivo é não só dominar as tecnologias, mas também entender a filosofia por trás delas, buscando sempre me aprimorar e contribuir com o que aprendo. Estou aberto a oportunidades que me permitam crescer como desenvolvedor e fazer a diferença no mundo digital.
            </p>
          </div>

          
          <div className="div-button">
            <DownloadButton fileName={"programador-currículo"} filePath={"../assets/img/profile04.jpeg"}/>
            <BtnLink href="/projetos" icon={faPersonDigging}>
              Projetos
            </BtnLink>
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
