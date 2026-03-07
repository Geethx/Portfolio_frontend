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
        color: '#6366f1',
        current: true,
    },
    {
        degree: 'Professional Certificate in Artificial Intelligence',
        institution: 'Informatics Institute of Technology (IIT Campus)',
        period: 'Sep 2025 - Dec 2025',
        icon: <FiAward />,
        color: '#0ea5e9',
    },
    {
        degree: 'G.C.E. Advanced Level (2022)',
        institution: 'St. Servatius College, Matara',
        faculty: 'BBB - Physical Science Stream',
        period: '2018 - 2022',
        icon: <BiSolidSchool />,
        color: '#10b981',
    },
];

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-24 relative" ref={ref}>
            <div className="absolute w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] rounded-full bg-accent-500 bottom-0 -left-[100px] sm:-left-[150px] blur-[80px] md:blur-[100px] opacity-15 pointer-events-none -z-1" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.75rem] sm:text-[0.8rem] font-medium text-primary-400 uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        Education
                    </span>
                    <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-extrabold text-gradient leading-tight mb-3 sm:mb-4">
                        Academic Background
                    </h2>
                    <p className="text-[0.95rem] sm:text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.6] sm:leading-[1.7] px-4 sm:px-0">
                        My educational journey and qualifications
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[500px] sm:max-w-none mx-auto">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            className="glass-card glass-card-hover p-6 sm:p-7 md:p-8 text-center relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                        >
                            {edu.current && (
                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[0.65rem] sm:text-[0.7rem] font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 bg-primary-500/15 border border-primary-500/30 rounded-full text-primary-400">
                                    Current
                                </div>
                            )}

                            <div
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl text-[1.2rem] sm:text-[1.4rem] mx-auto mb-4 sm:mb-5"
                                style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}33` }}
                            >
                                {edu.icon}
                            </div>

                            <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold mb-1.5 sm:mb-2 leading-[1.4]">{edu.degree}</h3>
                            <p className="text-[0.85rem] sm:text-[0.9rem] font-semibold mb-1" style={{ color: edu.color }}>
                                {edu.institution}
                            </p>
                            {edu.faculty && (
                                <p className="text-[0.78rem] sm:text-[0.82rem] text-slate-400 mb-3 sm:mb-4 px-2">{edu.faculty}</p>
                            )}

                            <div className="inline-flex items-center gap-1 sm:gap-1.5 font-mono text-[0.75rem] sm:text-[0.8rem] text-slate-500 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-surface-1 rounded-full mt-3 sm:mt-4">
                                <FiCalendar className="text-xs sm:text-sm" /> {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
