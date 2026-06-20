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
        <section id="skills" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-white bg-brand-blue uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#e0ef29]">
                        MY SKILLS
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        TECH STACK
                    </h2>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, catIndex) => {
                        return (
                            <motion.div
                                key={cat.title}
                                className="brutalist-card p-6 brutalist-card-hover flex flex-col group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: catIndex * 0.15 }}
                            >
                                <h3 className="font-display text-xl font-bold uppercase border-b-2 border-brand-white pb-4 mb-6 group-hover:border-brand-black transition-colors">
                                    {cat.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 border-2 border-brand-white transition-all duration-300 hover:bg-brand-black hover:text-brand-white hover:border-brand-neon group-hover:border-brand-black cursor-default bg-brand-black text-brand-white"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: catIndex * 0.15 + i * 0.05 }}
                                        >
                                            <span className="text-xl" style={{ color: cat.color }}>
                                                {skill.icon}
                                            </span>
                                            <span className="font-mono text-sm uppercase font-bold">
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
