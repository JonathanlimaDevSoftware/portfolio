import { motion } from "framer-motion";
import Form from "../components/form/Form";
import SocialIcons from "../components/social-icons/SocialIcons";
import img8k from '../assets/img/img8k.jpg'; // Importando a imagem diretamente



const Contact = () => {
  // Estilo para a imagem de fundo
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${img8k})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '580px',
    borderRadius: '20px',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="contact">
        
        <Form/>
        {/* css dentro de contact.scss */}
        <section className="background-img" style={backgroundStyle}>

          <div className="contact__text">
            <p className="contact__paragraph ">Tem alguma dúvida ou gostaria de conversar? Fique à vontade para me enviar uma mensagem!</p>
          </div>

          <SocialIcons 
          githubUrl="https://github.com/JonathanlimaDevSoftware"
          gmailUrl="jonathan.lima.devsoftware@gmail.com?subject=Contato%20Profissional&body=Olá%20Jonathan,%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!"
          linkedinUrl="https://www.linkedin.com/in/jonathan-lima-4035b3342/"
          whatsappUrl="5511995295245"/>
        </section>
      </section>
          
    </motion.div>
  );
};

export default Contact;
