import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";




const Tech = () => {
  return (
    <div className="flex flex-col">
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technology</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="flex text-center items-center justify-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech");