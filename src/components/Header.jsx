import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faUser } from '@fortawesome/free-solid-svg-icons';
import {ReactTyped} from 'react-typed';

function Header() {
  const headerVar = {
    initial: {
      x: -100,
      scale: 0
    },
    animate: {
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'tween'
      }
    }
  };

  const imgVar = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
        type: 'tween'
      }
    }
  };

  return (
    <div className="header min-h-screen flex flex-col items-center sm:flex-row sm:items-center sm:justify-around">
      <motion.div className="mt-10 sm:mt-0 sm:order-2" variants={imgVar} initial="initial" animate="animate">
        <FontAwesomeIcon icon={faUser} size='10x' className='mx-auto w-full'/>
      </motion.div>

      <motion.div className="mt-20 p-5 sm:mt-32 sm:order-1" variants={headerVar} initial="initial" animate="animate">
        <span className='text-xl'>Hello</span>
        <h1 className="text-xl font-bold mt-2 mb-2 sm:text-2xl md:text-3xl lg:text-5xl">
          I'm <span>MOHAMMED MUBBASHIR AHMED</span>
        </h1>
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-5">
          <ReactTyped strings={['Full Stack Web Developer', 'MERN Stack Developer']} typeSpeed={40} backSpeed={40} loop />
        </h2>
        <Link smooth to="#contact" className="border-2 border-black p-2 rounded font-bold text-lg hover:text-gray-900 transition-all">
          Contact <FontAwesomeIcon icon={faContactCard} size="lg"  />
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
