import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';

const projects = [
    {
        title: 'E-Commerce Web Application',
        type: 'Individual Project',
        year: '2025',
        description: 'Developed an e-commerce web application with secure user login, product management, customer order creation, review posting, order tracking. Built admin features for review moderation, user blocking, order management, and managing multiple admin accounts.',
        tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
        github: 'https://github.com/E-Commerce-Yapa-Computers',
        live: '',
        color: '#6366f1',
        featured: true,
    },
    {
        title: 'Workshop Inventory Management System',
        type: 'Client Project',
        year: '2025',
        description: 'Designed a full stack system for managing workshop equipment with item status tracking. Implemented item check-in/check-out functionality, database schema, workflows, and APIs to manage items, update statuses, and record item movement history.',
        tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
        github: 'https://github.com/Bisal-s-Hardware',
        live: 'https://bisalhardware.vercel.app/',
        color: '#0ea5e9',
        featured: true,
    },
    {
        title: 'StockSync - Warehouse Management',
        type: 'Group Project',
        year: '2023-2024',
        description: 'An IoT-based intelligent warehouse management system built on ESP32 microcontrollers that integrated biometric, RFID, and IR sensors for real-time security and monitoring with Keypad Switch Module and LCD Display.',
        tech: ['Arduino C++', 'React.js', 'Node.js', 'MySQL', 'Firebase'],
        github: 'https://github.com/Hardware-project-group',
        color: '#8b5cf6',
    },
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 relative" ref={ref}>
            <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-primary-600 top-[30%] -right-[100px] sm:-right-[150px] md:-right-[200px] blur-[80px] md:blur-[100px] opacity-15 pointer-events-none -z-1" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.75rem] sm:text-[0.8rem] font-medium text-primary-400 uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        Portfolio
                    </span>
                    <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-extrabold text-gradient leading-tight mb-3 sm:mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-[0.95rem] sm:text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.6] sm:leading-[1.7] px-4 sm:px-0">
                        A selection of projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {displayedProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="glass-card glass-card-hover p-5 sm:p-6 md:p-7 relative overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Top accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] opacity-60 hover:opacity-100 transition-opacity duration-300"
                                style={{ background: project.color }}
                            />

                            <div className="flex justify-between items-start mb-3 sm:mb-3.5">
                                <div>
                                    <span className="font-mono text-[0.7rem] sm:text-xs font-medium uppercase tracking-wider mb-1 sm:mb-1.5 block" style={{ color: project.color }}>
                                        {project.type}
                                    </span>
                                    <h3 className="text-[1.05rem] sm:text-[1.2rem] font-bold leading-[1.3]">{project.title}</h3>
                                </div>
                                <span className="font-mono text-[0.7rem] sm:text-xs text-slate-500 shrink-0 pt-1">{project.year}</span>
                            </div>

                            <p className="text-slate-400 text-[0.85rem] sm:text-[0.9rem] leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-5 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[0.7rem] sm:text-xs font-medium font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 border rounded-full"
                                        style={{ borderColor: `${project.color}44`, color: project.color }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-glass-border">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:gap-1.5 text-[0.8rem] sm:text-[0.85rem] font-medium text-slate-400 hover:text-primary-400 transition-colors duration-300">
                                        <FiGithub /> <span>Code</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:gap-1.5 text-[0.8rem] sm:text-[0.85rem] font-medium transition-colors duration-300" style={{ color: project.color }}>
                                        <FiExternalLink /> <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {!showAll && projects.length > 4 && (
                    <motion.div
                        className="flex justify-center mt-8 sm:mt-10"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[0.85rem] sm:text-[0.95rem] font-semibold
                bg-transparent text-slate-100 border-[1.5px] border-glass-border
                hover:border-primary-500 hover:bg-primary-500/10 hover:-translate-y-0.5 transition-all duration-300"
                            onClick={() => setShowAll(true)}
                        >
                            View All Projects <FiChevronRight />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
