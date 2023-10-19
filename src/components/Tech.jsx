import React from 'react'
import { TheEarthCanvas } from './canvas';
import {motion} from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={slideIn("left", "tween", 0.7, 1)}
    className='w-200px object-contain flex justify-center'
    >
      <TheEarthCanvas />
    </motion.div>
  )
}

export default SectionWrapper(Tech, "")