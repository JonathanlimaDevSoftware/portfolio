import { motion } from "framer-motion";
import { Cards } from "../components/cards/Cards";
import ApiCustomImg from '../assets/img/ilustrar projeto/apiCustom.png';
const projects = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="projects">
      <Cards img_url={ApiCustomImg} alt="img projeto api" title="Custom API" paragraph="Consumo de api. Um input pega o valor de quantidade inserida pelo usuário e depois retorna dados de usuário" btn_done="/api"/>

      </section>
    </motion.div>
  );
};

export default projects;
