import { motion } from "framer-motion";
import { Cards } from "../components/cards/Cards";

const projects = () => {
  const textProject = [
    {
      img_url: "https://storage.googleapis.com/atados-v3/user-uploaded/images/15f29558-ca74-4eb8-8979-99f3af8a70a9.jpg",
      title: "API FORM HTML 1",
      paragraph:
        "Aqui está um CSS estilizado para a estrutura do seu card de projeto, utilizando um design moderno.",
      btn_link: "/api"
    },
    {
      img_url: "https://i7host.com.br/blog/wp-content/uploads/2022/04/capa-o-que-e-Front-end.jpg",
      title: "API FORM HTML 2",
      paragraph:
        "Este é um segundo projeto para demonstrar o layout estilizado e funcional.",
    },
    {
      img_url: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/ARTIGO-ESTUDOS-400x280.png",
      title: "API FORM HTML 3",
      paragraph:
        "Mais um projeto para ilustrar a organização e reutilização de componentes.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="projects">
        {textProject.map((item, index) => ( 
          <Cards
            key={index}
            img_url={item.img_url}
            title={item.title}
            paragraph={item.paragraph}
          
          />
        ))}

      </section>
    </motion.div>
  );
};

export default projects;
