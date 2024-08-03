import { motion } from 'framer-motion';
import { skills } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import Resume from '../assets/resume.pdf';

function About() {
  const aboutVar = {
    initial: {
      opacity: 0,
      x: -50,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: 'easeInOut',
      },
    },
  };

  const skillsVar = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen relative m-10 sm:px-5 md:m-20" id="about">
      <motion.div variants={aboutVar} initial="initial" animate="whileInView">
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
          <FontAwesomeIcon icon={faInfoCircle} /> | ABOUT ME
        </h1>
        <p className="mt-10 text-lg font-semibold w-full md:w-[800px]">
          Hello! I'm Mubashir Ahmed, and I'm on a journey as a student of engineering in computer science.
          Passionate and dedicated web developer with a strong foundation in front-end and back-end technologies.
        </p>
        <div className="mt-3">
          <a href={Resume} target="__blank" className="text-xl font-bold text-gray-900 border border-gray-900 p-2 rounded">
            See My Resume <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>
      </motion.div>

      <motion.div className="mt-10" variants={skillsVar} initial="initial" animate="whileInView">
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl mb-10">
        <FontAwesomeIcon icon={faCode}  /> | SKILLS
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((ele, index) => (
            <div key={index} className="p-2 w-full">
              <div className="text-center">
                <FontAwesomeIcon icon={ele.icon} color={ele.color} size="4x" />
                <h1 className="text-center">{ele.skillName}</h1>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
