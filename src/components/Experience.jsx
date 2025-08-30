import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState, useRef, useEffect } from 'react';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <a href={experience.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[60%] h-[60%] transition-transform duration-300 transform hover:scale-150">
          <img src={experience.icon} alt={experience.company_name} className="w-full h-full object-contain" />
        </a>
      </div>
    }>
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {
          experience.title
        }
      </h3>
      <p className="text-secondary text-[16px] font-semibold " style={{ margin: 0 }}>{experience.company_name}</p>

    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider" >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      // Show/hide top fade based on scroll position
      setShowTopFade(scrollTop > 10);
      
      // Show/hide bottom fade based on scroll position
      setShowBottomFade(scrollTop < scrollHeight - clientHeight - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      
      {/* Fixed height container with scrollable content */}
      <div className="mt-20 flex flex-col h-[70vh] max-h-[800px] min-h-[800px] sm:h-[65vh] xs:h-[60vh] relative">
        {/* Top fade effect */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: showTopFade ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Scroll indicator at top */}
        <motion.div 
          className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: showTopFade ? 0 : 1, 
            y: showTopFade ? -10 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 text-secondary text-sm">
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-secondary rounded-full"
            />
            <span>Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-1 h-1 bg-secondary rounded-full"
            />
          </div>
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar"
          onScroll={handleScroll}
        >
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>

        {/* Bottom fade effect */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: showBottomFade ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Scroll indicator at bottom */}
        <motion.div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: showBottomFade ? 0 : 1, 
            y: showBottomFade ? 10 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 text-secondary text-sm">
            <motion.div 
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-secondary rounded-full"
            />
            <span>You've reached the end</span>
            <motion.div 
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-1 h-1 bg-secondary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')