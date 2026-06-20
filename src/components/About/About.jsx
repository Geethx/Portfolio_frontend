import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const stats = [
    { number: '6+', label: 'Projects' },
    { number: '10+', label: 'Technologies' },
    { number: '2+', label: 'Years Coding' },
];

const highlights = [
    { icon: <FiCode />, title: 'Frontend', desc: 'React, React Native, Flutter' },
    { icon: <FiServer />, title: 'Backend', desc: 'Node.js, NestJS, Spring Boot' },
    { icon: <FiDatabase />, title: 'Database', desc: 'MongoDB, MySQL, PostgreSQL' },
    { icon: <FiCloud />, title: 'DevOps', desc: 'AWS, Docker, Kubernetes' },
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-black bg-brand-neon uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#ffffff]">
                        ABOUT ME
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        WHO I AM
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-display font-bold mb-6 leading-[1.2] uppercase">
                            CRAFTING <span className="bg-brand-blue text-brand-white px-2">DIGITAL EXPERIENCES</span> WITH MODERN TECH
                        </h3>
                        <p className="font-mono text-brand-white mb-6 text-sm sm:text-base leading-relaxed uppercase border-l-4 border-brand-neon pl-4">
                            I'm an IT undergraduate at the <strong className="text-brand-neon">University of Moratuwa</strong> with
                            a strong foundation in Software Development and expertise in Emerging Technologies.
                            I'm proficient in building full-stack applications and passionate about
                            <strong className="text-brand-neon"> Artificial Intelligence, Machine Learning, and DevOps</strong> to
                            drive innovative solutions.
                        </p>
                        <p className="font-mono text-brand-white mb-8 text-sm sm:text-base leading-relaxed uppercase border-l-4 border-brand-neon pl-4">
                            With experience across academic projects, internships, and client projects, I've developed
                            responsive web applications, e-commerce platforms, Generative AI applications and IoT-based systems.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="brutalist-card p-6 flex flex-col items-center justify-center brutalist-card-hover text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <span className="block text-4xl sm:text-5xl font-display font-bold mb-2">{stat.number}</span>
                                    <span className="font-mono text-sm uppercase tracking-widest font-bold">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
