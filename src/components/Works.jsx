import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { stop, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import React, { useEffect, useState }from 'react';
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  icon,
  image,
  source_code_link,
  type,
  audio_link,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioInstance, setAudioInstance] = useState(null);

  useEffect(() => {
    return () => {
      if (audioInstance) {
        audioInstance.pause();
      }
    };
  }, [audioInstance]);

  const handleAudioToggle = () => {
    if (!audioInstance) {
      const audio = new Audio(audio_link);
      setAudioInstance(audio);
      audio.play();
      setIsPlaying(true);
      audio.addEventListener('ended', () => setIsPlaying(false));
    } else if (isPlaying) {
      audioInstance.pause();
      setIsPlaying(false);
    } else {
      audioInstance.play();
      setIsPlaying(true);
    }
  };
    return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover flex-col'> {/* Change to flex-col */}
            <div
              onClick={() => {
                if (type === "audio") {
                  handleAudioToggle();
                } else {
                  window.open(source_code_link, "_blank");
                }
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mb-2' // Added mb-2 for spacing
            >
              <img
                src={type === "audio" && isPlaying ? stop : icon}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {type === "audio" && ( // Only show for the "AI Music Generator"
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github} // Assuming you've imported the GitHub icon as 'github'
                  alt='GitHub'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white mid-text font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary sub-text text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
      initial="hidden"
      whileInView="show"
      >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary sub-text text-[17px] max-w-3xl leading-[30px]'
        >
          I am motivated by the pursuit of innovative solutions and projects aligned with my passions. My curiosity constantly propels me towards exploring new domains and acquiring knowledge. Below are some of the projects I have done in the past.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");