import React from "react";

//countUp
import CountUp from "react-countup";
//intersect observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import cv from "../assets/CURRICULUM VITAE Gnanhoungbe Arsène.pdf";
import { Link } from "react-scroll";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div> */}
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">A propos de moi</h2>
            <h3 className="h3 mb-2">
              Je suis un developpeur full-stack avec assez d'expériences pour
              réaliser vos projets
            </h3>
            <p className="mb-4">
              Mon objectif est de mettre mes
              compétences au service de clients variés, en
              apportant une expertise technique et une approche créative à
              chaque projet. Je suis enthousiaste à l'idée de collaborer avec
              des entreprises et des entrepreneurs pour transformer leurs idées
              en réalité numérique et contribuer à leur succès dans le monde en
              ligne.{" "}
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-8">
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  +{inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Année d' <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projets <br /> Completés
                </div>
              </div>
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Clients <br /> Satisfaits
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth={true} spy={true} className="btn btn-lg flex justify-center items-center cursor-pointer"> Me contacter </Link>
              <a download href={cv} className="text-gradient btn-link">
                Télécharger Mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
