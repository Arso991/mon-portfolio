import React from "react";

//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import marketing from "../assets/marketing.svg";
import design from "../assets/design.svg";
import web from "../assets/web.svg";
import { Link } from "react-scroll";

//services data
const services = [
  {
    name: "Dévelopement Web",
    description:
      "Je conçois des solutions web modernes, performantes et évolutives, parfaitement adaptées à vos besoins. Que ce soit pour un site vitrine, une application web, une plateforme e-commerce ou un back-office personnalisé, je vous accompagne de l’idée à la mise en ligne.",
    image: web,
  },
  {
    name: "Designe UI/UX",
    description:
      "Je conçois des interfaces élégantes, intuitives et centrées sur l'utilisateur pour donner vie à vos idées digitales. Mon approche combine esthétique moderne, réflexion stratégique et compréhension des besoins de vos utilisateurs pour transformer chaque interaction en une expérience fluide et engageante.",
    image: design,
  },
  {
    name: "Marketing Digital",
    description:
      "Dans un monde où la visibilité en ligne est essentielle, je vous accompagne dans le développement et l’optimisation de votre présence numérique. Mon service de marketing digital est conçu pour aider les marques, entrepreneurs et entreprises à atteindre leurs objectifs commerciaux grâce à des stratégies efficaces et mesurables.",
    image: marketing,
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text && image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Mes compétences</h2>
            <h3 className="h3 text-black max-w-[455px] mb-16">
              Je suis un developpeur full-stack qui donne vie à projets numérique
            </h3>
            <Link to="work" spy={true} smooth={true} className="btn btn-sm py-4 cursor-pointer">Voir mon travail</Link>
            <div>

            </div>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destructure services
                const { name, description, image } = service;
                return (
                  <div
                    className="border-b border-accent mb-[38px] flex gap-2"
                    key={index}
                  >
                    <div className="flex-1 lg:max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {" "}
                        {name}{" "}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {" "}
                        {description}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <img src={image} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
