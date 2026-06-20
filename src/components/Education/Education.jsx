import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { GiGraduateCap } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";

const education = [
    {
        degree: 'B.Sc. (Hons) Degree in Information Technology & Management',
        institution: 'University of Moratuwa',
        faculty: 'Faculty of Information Technology',
        period: '2023 - Present',
        icon: <GiGraduateCap />,
        color: '#e0ef29',
        current: true,
    },
    {
        degree: 'Professional Certificate in Artificial Intelligence',
        institution: 'Informatics Institute of Technology (IIT)',
        period: 'Sep 2025 - Dec 2025',
        icon: <FiAward />,
        color: '#0505cb',
    },
    {
        degree: 'G.C.E. Advanced Level (2022)',
        institution: 'St. Servatius College, Matara',
        faculty: 'BBB - Physical Science Stream',
        period: '2018 - 2022',
        icon: <BiSolidSchool />,
        color: '#ff0000',
    },
];

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-white bg-brand-blue uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#ffffff]">
                        EDUCATION
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        ACADEMIC BACKGROUND
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            className="brutalist-card p-6 sm:p-8 flex flex-col items-center text-center brutalist-card-hover group relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15 }}
                        >
                            {edu.current && (
                                <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-brand-white bg-brand-black text-brand-neon">
                                    CURRENT
                                </div>
                            )}

                            <div
                                className="w-16 h-16 flex items-center justify-center border-2 border-brand-white text-3xl mb-6 bg-brand-black transition-colors group-hover:bg-brand-white"
                                style={{ color: edu.color }}
                            >
                                {edu.icon}
                            </div>

                            <h3 className="font-display text-xl font-bold mb-4 uppercase leading-tight">{edu.degree}</h3>
                            <p className="font-mono text-sm font-bold uppercase mb-2" style={{ color: edu.color }}>
                                {edu.institution}
                            </p>
                            {edu.faculty && (
                                <p className="font-mono text-xs uppercase mb-6">{edu.faculty}</p>
                            )}

                            <div className="mt-auto inline-flex items-center gap-2 font-mono text-xs font-bold uppercase border-2 border-brand-white px-4 py-2 bg-brand-black text-brand-white group-hover:border-brand-black transition-colors">
                                <FiCalendar className="text-sm" /> {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
