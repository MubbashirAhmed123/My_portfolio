import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfoCircle,faCode,faGraduationCap,faBriefcase,faClipboard,faAddressCard, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
function Navbar() {

  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }



  const mobileNavVar = {
    initial: { y: -100, opacity: 0 }, 
    animate: { y: 0, opacity: 1,
    transition: { duration: 1, type: 'spring' },
    },
    exit: {
      opacity: 0, x: '-100vw', transition: { duration: 0.5, type: 'tween' }
    }
  }

  const nameVar={
    initial:{ y: -100, opacity: 0 },
     animate:{ y: 0, opacity: 1,
      transition:{ delay: 1, duration: 1 }
     }
  }

  return (
    <>
    
      <div className='sticky z-10 w top-0 '>
        <div className='bg-gray-500 h-16 p-5 flex justify-between items-center 0 sm:justify-around' >

          <motion.div variants={nameVar} initial='initial' animate='animate' >
            <h1 className="font-bold text-gray-900  sm:text-lg md:text-xl">Mubbashir</h1>
          </motion.div>

          <motion.div className=' sm:hidden' onClick={handleClick} whileHover={{ scale: 1.5 }} >
            {!nav ? <FontAwesomeIcon icon={faBars} size="xl"/>:<FontAwesomeIcon icon={faXmark} size="xl"/> 
            }
          </motion.div>

          <ul className="hidden sm:flex space-x-9 mx-5 ">
            <Link smooth to='#about' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 text-center transition-all focus:font-extrabold focus:text-black" ><FontAwesomeIcon icon={faInfoCircle} size="xl" a className="mr-2"/>About</Link>
             <Link smooth to='#about' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 text-center  transition-all focus:font-extrabold focus:text-black"><FontAwesomeIcon icon={faCode} size="xl" className="mr-2"/>Skills</Link> 
            <Link smooth to='#education' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 text-center  transition-all focus:font-extrabold focus:text-black"><FontAwesomeIcon icon={faGraduationCap} size="xl" className="mr-2"/>Education</Link>
            <Link smooth to='#projects' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 text-center  transition-all focus:font-extrabold focus:text-black"><FontAwesomeIcon icon={faBriefcase} size="xl" className="mr-2"/>Projects</Link>
            <Link smooth to='#contact'  className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 text-center  transition-all focus:font-extrabold focus:text-black"><FontAwesomeIcon icon={faAddressCard} size="xl"  className="mr-2"/>Contact</Link>
          </ul>
        </div>
        <nav className='mobileNav sm:hidden ' >
          <AnimatePresence>
            {
              nav && (
                <motion.ul className='fixed z-10 bg-gray-100 w-screen '  variants={mobileNavVar} initial='initial' animate='animate'
                exit='exit'>

                  <motion.li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all">
                    <Link smooth to='#about'><FontAwesomeIcon icon={faInfoCircle} size="lg" className="mr-3"/>About</Link>
                  </motion.li>
                  <hr /> 

                   <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#about'  > <FontAwesomeIcon icon={faCode} size="lg" className="mr-3"/>Skills</Link>
                  </li>
                  <hr /> 

                  <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#education'  ><FontAwesomeIcon icon={faGraduationCap} size="lg" className="mr-3"/>Education</Link>
                  </li>
                  <hr />

                  <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#projects'  ><FontAwesomeIcon icon={faClipboard} size="lg" className="mr-3" />Projects</Link>
                  </li>
                  <hr />

                  <li className=" p-5 text-lg font-bold hover:scale-105 transition-all "><Link smooth to='#contact'><FontAwesomeIcon icon={faAddressCard} size='lg' className="mr-3"/>Contact</Link></li>
                  <hr />

                </motion.ul>
              )
            }

          </AnimatePresence>

        </nav> 
      </div>
    </>
  )
}

export default Navbar