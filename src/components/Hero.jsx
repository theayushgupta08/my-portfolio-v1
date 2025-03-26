import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { socialLinksicons } from '../constants';
import { fadeIn } from '../utils/motion';
import { ayush } from '../assets';

const Hero = () => {
  return (

    <section className='relative w-full h-screen mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5'> {/* for the background image - lines */}
      <div className={`${styles.paddingX} mt-16 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>  {/* for the dot and line */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' /> {/* for the dot */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> {/* for the line below dot */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Ayush</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a aspiring Software Development <br className='sm:block hidden' />Engineer (SDE) and a Tech Content Creator!</p>

          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <div className='flex flex-row mt-5 gap-5 pt-1 justify-around bg-yellow-400 p-5 rounded-xl'>
              {socialLinksicons.map((socialLink) => (
                <a class="mylinks" href={socialLink.link} target="_blank">
                  <ul class="social-icons flex gap-2 mt-5" key={socialLink.alt}>
                    <li class="sociallinks"><img src={socialLink.icon} alt={socialLink.alt} width="25" height="25" /></li>
                    <p className='text-black font-semibold sm:block hidden'>{socialLink.alt}</p>
                  </ul>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
        {/* <div className="flex justify-center items-center sm:justify-end">
          <img
            src={ayush}
            alt="Ayush"
            className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-full"
          />
        </div> */}
      </div>



      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">

          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{
              y: [0, 24, 0],
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero;