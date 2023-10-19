import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { closebutton, debatepic, JAY } from '../assets';

const ExperienceCard = ({ experience }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: '#101010', color: '#fff' }}
        contentArrowStyle={{ borderRight: '1px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div
          onClick={() => {
            if (experience.company_name === "Jay Learning Center") {
              setIsModalOpen(true);
            }
          }}
        >
          <h3 className="text-white mid-text text-[24px] font-bold">{experience.title}</h3>
          <p className='text-secondary text-[60px] font-semibold' style={{ margin: 0 }}>
            {experience.company_name}
          </p>
          <ul className='mt-5 list-disc sub-text ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      {isModalOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="relative w-3/4 h-3/4">
      <img
        src={closebutton}  
        alt="Close Modal"
        className="absolute top-2 right-2 cursor-pointer z-10"
        onClick={() => setIsModalOpen(false)}
      />
      <div className="bg-tertiary rounded-lg p-8 h-full overflow-y-auto flex flex-col items-center">
        <h1 className='text-[24px] head-text font-bold mb-4'>
          My story on Co-Founding a debate organization at 13.
        </h1>
        <img src={debatepic} alt="debate" className='max-h-[300px]' />
        <p className='mt-4 sub-text text-secondary'>
          At 13, a debate camp ignited my passion for debating. Realizing the lack of accessible year-round opportunities in Ottawa, my mother and I established a weekly neighbourhood debate class at just $3 a session. Within a year, this initiative quickly grew into a summer camp, attracting 70 students.
        </p>
        <p className='mt-4 sub-text text-secondary'>
          Today, JAY Learning Center is a non-profit educational hub in Kanata in Barrhaven, branching out into Mathematics, Programming, and more. We are driven by the atmosphere of students helping students, providing a platform for knowledge sharing.
        </p>
        <p className='mt-4 sub-text text-secondary'>
          Currently, at JAY Learning Center I direct all new developments. My coaching journey in debate has spanned over 6 years, and I've carried this passion into my university life as the Debate Competition Director at UTEK. In addition, I've taught competition math and programming classes, reinforcing our mission.
        </p>
      </div>
    </div>
  </div>
)}

    </>
  );
}

const Experience = () => {
  return (
    <>
      <motion.div
      initial="hidden"
      whileInView="show"
      >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far...</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Experience, "experience");
