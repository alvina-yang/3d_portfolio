import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { TheMoonCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { resume } from "../assets";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_1qcw55o',
        'template_0xntdet',
        {
          from_name: form.name,
          to_name: "Alvina Yang",
          from_email: form.email,
          to_email: "alvinay73@gmail.com",
          message: form.message,
        },
        'cmddAvFmj_J7l1Dbt'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    >
      <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#1b1b1b] p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="text-gray-300 py-[10px] mid-text ">Interested in my projects? Have any inquiries? Want a good book recommendation?</p>
        <p className={styles.sectionSubText}>Get in touch</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white mid-text font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white sub-text rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mid-text font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='bg-tertiary sub-text py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mid-text font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary sub-text py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary mid-text py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="mt-10 sub-text text-center">
        <p className="mb-2">Little souvenir?</p>
        <a 
          href={resume} 
          download 
          className="text-gray-500 sub-text hover:text-white transition duration-300"
        >
          Download my resume
        </a>
      </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] xl:min-w-[700px]'
      >
        <TheMoonCanvas />  
      </motion.div>
    </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");