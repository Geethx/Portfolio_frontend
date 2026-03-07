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
        <section id="about" className="py-16 lg:py-24 relative" ref={ref}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.8rem] font-medium text-primary-400 uppercase tracking-[3px] mb-3 px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        About Me
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-gradient leading-tight mb-4">
                        Who I Am
                    </h2>
                    <p className="text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.7]">
                        A passionate developer turning ideas into elegant digital solutions
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[60px] items-start">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-[1.8rem] font-extrabold mb-5 leading-[1.3]">
                            Crafting <span className="text-gradient">Digital Experiences</span> with Modern Tech
                        </h3>
                        <p className="text-slate-400 mb-4 text-[0.98rem] leading-[1.8]">
                            I'm an IT undergraduate at the <strong className="text-slate-100 font-semibold">University of Moratuwa</strong> with
                            a strong foundation in Software Development and expertise in Emerging Technologies.
                            I'm proficient in building full-stack applications and passionate about 
                            <strong className="text-slate-100 font-semibold"> Artificial Intelligence, Machine Learning, and DevOps</strong> to
                            drive innovative solutions.
                        </p>
                        <p className="text-slate-400 mb-4 text-[0.98rem] leading-[1.8]">
                            With experience across academic projects, internships, and client projects, I've developed
                            responsive web applications, e-commerce platforms, Generative AI applications and IoT-based systems.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-5 bg-surface-1 border border-glass-border rounded-xl
                    transition-all duration-300 hover:border-primary-500 hover:bg-primary-500/5 hover:-translate-y-[3px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <span className="block text-[1.6rem] font-extrabold text-gradient mb-1">{stat.number}</span>
                                    <span className="text-[0.78rem] text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="glass-card glass-card-hover flex items-center gap-4 p-5 px-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 min-w-[48px] flex items-center justify-center bg-primary-500/10 border border-primary-500/20 rounded-xl text-primary-400 text-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[0.95rem] font-bold mb-1">{item.title}</h4>
                                    <p className="text-[0.85rem] text-slate-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
