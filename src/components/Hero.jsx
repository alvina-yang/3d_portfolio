import { motion } from 'framer-motion';
import { styles } from '../styles';
import { MoonCanvas } from './canvas';
import Typewriter from 'typewriter-effect';
import { fadeIn, slideIn } from '../utils/motion';
import {NightSkyCanvas} from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#624185]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <Typewriter 
            options= {{
              strings: ["Hi, I'm Alvina"],
              autoStart: true,
              loop: true,
              pauseFor: 10000,
            }}
            />
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student at the University <br className="sm:block hidden" /> of Toronto specializing in <br className="sm:block hidden" />  computer science.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero