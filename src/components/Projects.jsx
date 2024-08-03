import { AnimatePresence, motion } from 'framer-motion';
import { projects } from "../data/Data";
import { useState } from 'react';
import { faClipboard, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects() {
    const [selectedId, setSelectedId] = useState(null);

    const projectsVar = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.6,
                ease: 'linear',
            },
        },
    };

    const singleProjectVar = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'linear',
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                ease: 'linear',
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div id="projects" className="min-h-screen relative m-10 mt-44 sm:px-5 md:m-20" variants={projectsVar} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="flex items-center mb-5">
                <FontAwesomeIcon icon={faClipboard} size="2xl" />
                <span className="text-3xl m-3">|</span>
                <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">PROJECTS</h1>
            </div>
            <div className="md:grid grid-cols-2 gap-10 justify-items-center md:px-5 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.projectId}
                        className={`${
                            selectedId ? 'opacity-25' : ''
                        } bg-gray-300 p-3 mt-10 rounded-md shadow-md shadow-black hover:scale-105 transition-all cursor-pointer flex flex-col justify-between`}
                    >
                        <motion.div>
                            <motion.img className="mx-auto" src={project.projectImg} alt="p1" width="200px" />
                            <motion.h3 className="text-lg font-bold text-center m-3">{project.projectTitle}</motion.h3>
                        </motion.div>
                        <motion.div className="flex flex-col justify-between h-full">
                            <motion.p className="line-clamp-4">
                                {project.projectDesc}
                                <hr className="py-2" />
                            </motion.p>
                            <button
                                className="w-fit px-3 py-1 mt-auto rounded-md bg-blue-500 hover:text-gray-800"
                                onClick={() => setSelectedId(project)}
                            >
                                See More
                            </button>
                        </motion.div>
                    </div>
                ))}
            </div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-80 z-50"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="bg-white p-7 rounded-xl shadow-md relative max-w-lg mx-4"
                            variants={singleProjectVar}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedId.projectImg} alt="" className="object-cover w-full h-64 rounded-t-xl" />
                            <p className="text-gray-700 font-bold text-xl my-3">{selectedId.projectTitle}</p>
                            <p className="text-gray-600">{selectedId.projectDesc}</p>
                            <p className="mt-2">Technologies: {selectedId.tech}</p>
                            <span
                                className="absolute top-2 right-4 cursor-pointer"
                                onClick={() => setSelectedId(null)}
                            >
                                <FontAwesomeIcon icon={faClose} size="lg" />
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Projects;
