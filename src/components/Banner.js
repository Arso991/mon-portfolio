import React from "react";

//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
//animation type
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import cv from "../assets/CURRICULUM VITAE Gnanhoungbe Arsène.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] mb-2 lg:text-[80px]"
            >
              ARSO <span>DEV</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[26px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Je suis </span>
              <TypeAnimation
                sequence={[
                  "Développeur",
                  2000,
                  "Fullstack",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[1rem] mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Je suis un développeur web et mobile passionné et
              toujours avide de défis excitants. Ma passion pour les
              technologies émergentes et mon engagement à créer des solutions
              innovantes font de moi un atout précieux pour tout projet web.
              Je suis prêt à apporter mes compétences et ma
              créativité à votre équipe. Ensemble, nous pouvons concrétiser vos
              idées et créer des expériences web exceptionnelles.{" "}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-6 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} spy={true} className="btn btn-lg flex justify-center items-center cursor-pointer">Contacter moi</Link>
              <a download href={cv} className="text-gradient btn-link">
                Télécharger Mon CV
              </a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Arso991">
                <FaGithub />
              </a>
              <a href="https://x.com/GnanhoungbeA">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/iam_arso11/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* image */}
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
