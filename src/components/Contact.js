import React from "react";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full my-8 lg:my-28">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col justify-center items-center ">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Contactez-moi
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-4">
                Travaillons <br /> ensemble !
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1 border border-white rounded-2xl flex flex-col gap-y-4 p-6">
            <input
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              placeholder="Votre nom"
              type="text"
            />
            <input
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              placeholder="Votre email"
              type="text"
            />
            <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-8" placeholder="Votre message"></textarea>
            <button className="btn btn-lg">Envoyer</button>
          </motion.form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
