import { motion } from "framer-motion"
import { degree } from "../data/Data"
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Education() {

    const educationVar={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:1,delay:1,ease:'easeIn',

            },
        }
    }
    return (
        <>
            <motion.div id='education' className=' min-h-screen  m-5 mt-24 sm:px-5 md:m-20' variants={educationVar} initial='initial' whileInView='animate' viewport={{once:true}}>
                <div className='flex items-center mb-5 '>
                <FontAwesomeIcon icon={faGraduationCap} size="2xl" />
                    <span className=' text-3xl m-3'>|</span>
                    <h1 className='text-xl font-bold sm:text-2xl md:text-3xl  '>EDUCATION</h1>
                </div>

                <div className='mb-3 px-3 py-5 '>
                    {
                        degree.map((degree,index) => {
                            return (
                                <div key={index} className="mb-5">
                                    
                                    <p className="mb-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{degree.degreeName} : <span>{degree.degreeYear}</span></p>
                                    <p className=' sm:text-xl md:text-2xl lg:text=3xl'>{degree.collegeName} </p>
                                    
                                    <p>{degree.marks}</p>
                                </div>
                            )
                        })
                    }


                </div>
                

            </motion.div>
        </>
    )
}

export default Education


