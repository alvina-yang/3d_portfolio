import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#101010', color: '#fff' }}
    contentArrowStyle={{ borderRight: '1px solid #232631' }}
    date={education.date}
    iconStyle={{ background: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.school}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] mid-text font-bold">{education.school}</h3>
      <p className='text-secondary text-[60px] font-semibold' style={{ margin: 0 }}>
        {education.degree}</p>
    </div>
    <ul className='mt-5 list-disc sub-text ml-5 space-y-2'>
      {education.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}

    </ul>

  </VerticalTimelineElement >
)

const Education = () => {
  return (
    <>
     <motion.div
     initial="hidden"
     whileInView="show"
     >
     <motion.div
        variants={textVariant()}
        className='w-full l-full'
      >
        <p className={`${styles.sectionSubText} text-left!`}>My education</p>
        <h2 className={`${styles.sectionHeadText} text-left!`}>My Educational Background.</h2>

      </motion.div>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>

      </div>
     </motion.div>
    </>
  )
}

export default SectionWrapper(Education, "education");
