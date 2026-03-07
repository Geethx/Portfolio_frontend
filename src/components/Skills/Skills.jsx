import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
    SiPython, SiDart, SiPhp, SiFlutter, SiNestjs, SiSpringboot,
    SiLaravel, SiPostgresql, SiMysql, SiFirebase,
    SiDocker, SiKubernetes, SiLinux, SiGit, SiGithub, SiHtml5,
    SiTailwindcss, SiCplusplus
} from 'react-icons/si';
import { FaAws, FaJava, FaCss3Alt } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Frontend Development',
        color: '#61DAFB',
        skills: [
            { name: 'React', icon: <SiReact /> },
            { name: 'React Native', icon: <SiReact /> },
            { name: 'Flutter', icon: <SiFlutter /> },
            { name: 'HTML5', icon: <SiHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
    },
    {
        title: 'Backend Development',
        color: '#68A063',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'NestJS', icon: <SiNestjs /> },
            { name: 'Laravel', icon: <SiLaravel /> },
            { name: 'Spring Boot', icon: <SiSpringboot /> },
        ],
    },
    {
        title: 'Programming Languages',
        color: '#F7DF1E',
        skills: [
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'PHP', icon: <SiPhp /> },
            { name: 'Dart', icon: <SiDart /> },
        ],
    },
    {
        title: 'Database & Cloud',
        color: '#47A248',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'AWS', icon: <FaAws /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> },
        ],
    },
    {
        title: 'Version Control',
        color: '#F05032',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
        ],
    },
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="py-10 sm:py-14 md:py-18 lg:py-20 relative" ref={ref}>
            <div className="absolute w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-full bg-emerald-500 top-1/2 -left-[100px] sm:-left-[150px] md:-left-[200px] -translate-y-1/2 blur-[80px] md:blur-[100px] opacity-15 pointer-events-none -z-1" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.7rem] sm:text-[0.75rem] font-medium text-primary-400 uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        My Skills
                    </span>
                    <h2 className="text-[clamp(1.6rem,7vw,2.8rem)] font-extrabold text-gradient leading-tight mb-2 sm:mb-3">
                        Tech Stack & Expertise
                    </h2>
                    <p className="text-[0.875rem] sm:text-[0.95rem] md:text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.6] sm:leading-[1.7] px-4 sm:px-2 md:px-0">
                        Technologies I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {skillCategories.map((cat, catIndex) => {
                        const isLastOdd = skillCategories.length % 2 !== 0 && catIndex === skillCategories.length - 1;
                        return (
                            <motion.div
                                key={cat.title}
                                className={`glass-card glass-card-hover p-5 sm:p-6 md:p-7 ${isLastOdd ? 'md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: catIndex * 0.15 }}
                            >
                                <h3
                                    className="text-[0.9rem] sm:text-base font-bold mb-4 sm:mb-5 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-glass-border"
                                    style={{ color: cat.color }}
                                >
                                    {cat.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {cat.skills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-surface-2 border border-glass-border rounded-xl
                      transition-all duration-300 hover:border-opacity-50 hover:-translate-y-0.5 hover:bg-surface-3 cursor-default"
                                            style={{ '--hover-color': cat.color }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: catIndex * 0.15 + i * 0.05 }}
                                            whileHover={{ borderColor: cat.color }}
                                        >
                                            <span className="text-base sm:text-lg flex" style={{ color: cat.color }}>
                                                {skill.icon}
                                            </span>
                                            <span className="text-[0.8rem] sm:text-[0.85rem] font-medium text-slate-200">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
