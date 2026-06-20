import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';

const projects = [
    {
        title: 'Learning Management System',
        type: 'Individual Project',
        year: '2026',
        description: 'Developed an online quiz web application with secure user login, quiz management, question management, review questions, answer tracking. Built admin features for quiz moderation, result tracking',
        tech: ['React', 'Spring Boot', 'Supabase', 'Vercel', 'Railway'],
        live: 'https://studysprintonline.vercel.app',
        Backend: 'https://github.com/Geethx/Online_Quiz_System_Backend',
        Frontend: 'https://github.com/Geethx/Online_Quiz_System_Frontend',
        color: '#ff0000',
    },
    {
        title: 'E-Commerce Web Application',
        type: 'Individual Project',
        year: '2025',
        description: 'Developed an e-commerce web application with secure user login, product management, customer order creation, review posting, order tracking. Built admin features for review moderation, user blocking, order management.',
        tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
        github: 'https://github.com/E-Commerce-Yapa-Computers',
        live: '',
        color: '#e0ef29',
        featured: true,
    },
    {
        title: 'Workshop Inventory Management System',
        type: 'Client Project',
        year: '2025',
        description: 'Designed a full stack system for managing workshop equipment with item status tracking. Implemented item check-in/check-out functionality, database schema, workflows, and APIs to manage items.',
        tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
        github: 'https://github.com/Bisal-s-Hardware',
        live: 'https://bisalhardware.vercel.app/',
        color: '#0505cb',
        featured: true,
    },
    {
        title: 'StockSync - Warehouse Management',
        type: 'Group Project',
        year: '2023-2024',
        description: 'An IoT-based intelligent warehouse management system built on ESP32 microcontrollers that integrated biometric, RFID, and IR sensors for real-time security and monitoring with Keypad Switch Module and LCD Display.',
        tech: ['Arduino C++', 'React.js', 'Node.js', 'MySQL', 'Firebase'],
        github: 'https://github.com/Hardware-project-group',
        color: '#ffffff',
    }
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-white bg-brand-red uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#ffffff]">
                        PROJECTS
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        FEATURED BUILDS
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="brutalist-card p-6 flex flex-col group brutalist-card-hover"
                            style={{ borderTopWidth: '8px', borderTopColor: project.color }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: project.color }}>
                                        {project.type}
                                    </span>
                                    <h3 className="font-display text-2xl font-bold uppercase leading-tight">{project.title}</h3>
                                </div>
                                <span className="font-mono text-xs font-bold uppercase border-2 border-brand-white px-2 py-1 shrink-0">{project.year}</span>
                            </div>

                            <p className="font-mono text-sm uppercase leading-relaxed mb-6 flex-1 border-l-4 border-brand-white pl-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-xs font-bold uppercase px-3 py-1 bg-brand-black border-2 border-brand-white"
                                        style={{ color: project.color, borderColor: project.color }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-brand-white">
                                {project.Backend && project.Frontend ? (
                                    <>
                                        <a href={project.Frontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-brand-neon transition-colors">
                                            <FiGithub className="text-xl" /> <span>FRONTEND</span>
                                        </a>
                                        <a href={project.Backend} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-brand-neon transition-colors">
                                            <FiGithub className="text-xl" /> <span>BACKEND</span>
                                        </a>
                                    </>
                                ) : project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-brand-neon transition-colors">
                                        <FiGithub className="text-xl" /> <span>CODE</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm font-bold uppercase transition-colors" style={{ color: project.color }}>
                                        <FiExternalLink className="text-xl" /> <span>LIVE DEMO</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {!showAll && projects.length > 4 && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            className="brutalist-button px-8 py-4 font-bold flex items-center gap-2"
                            onClick={() => setShowAll(true)}
                        >
                            VIEW ALL PROJECTS <FiChevronRight className="text-xl" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
