import { motion } from "framer-motion";





const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      

      
      <section className="about">

          <div className="intro-text">
            <h1>Olá, Bem-vindo</h1>
            
            <p>
              Sou um desenvolvedor iniciante com uma grande paixão por tecnologia, focado principalmente no desenvolvimento web. Estou começando minha <span className="intro-text__detail">jornada com entusiasmo</span>, aprendendo a criar interfaces dinâmicas e funcionais utilizando HTML, CSS, JavaScript, React e outras ferramentas. 
            </p>

            <p>
              Acredito que cada linha de <span className="intro-text__detail">código é uma oportunidade de crescimento</span>, e estou empolgado para continuar aprendendo e me desafiando em novos projetos. Meu objetivo é não só dominar as tecnologias, mas também entender a filosofia por trás delas, buscando sempre me aprimorar e contribuir com o que aprendo. Estou aberto a oportunidades que me permitam crescer como desenvolvedor e fazer a diferença no mundo digital.
            </p>
          </div>
  
      </section>



    </motion.div>
  );
};

export default About;