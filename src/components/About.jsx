import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { headshot } from "../assets";
const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-[300px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-10 h-[350px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] head-textfont-bold text-center">{title}</h3>
          <p className="text-secondary sub-text text-[14px] leading-[30px]">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
      initial="hidden"
      whileInView="show"
      >
      <section
      className="flex flex-col sm:flex-row "
      >
      <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary sub-text text-[17px] max-w-xl leading-[30px]'
      >
       As a second-year computer science student, my academic journey has been defined by a passion for robotics, machine learning, and computer graphics. Alongside my academics, I engage in competitive debate and love reading. My drive to innovate led me to co-found a non-profit which uses debate as a tool for change. With a hands-on approach as well as a forward-looking mindset, I am commited to leveraging technology to create solutions that matter.
      </motion.p>
      </section>
      <motion.div
         variants={fadeIn("left", "spring", 0.2, 1)}
         className="flex justify-center p-4"
        >
        <img src={headshot} alt="headshot" className="max-h-[400px]  w-full object-contain"/>
        </motion.div>
      </section>

      <section
      className="mt-5"
      >
      <motion.div variants={textVariant()} className="mt-4">
        <p className={styles.sectionMidText} >Here are some of my skills...</p>
      </motion.div>

      <div className='mt-20 flex'>
        <div className="flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} description={service.description} {...service} />
          ))}

        </div>
      </div>
      </section>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about")