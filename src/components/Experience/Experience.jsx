import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'Beddle Hub',
        period: 'July 2025 - Aug 2025',
        description: [
            'Gained experiences in creating responsive, multi-page webapps',
            'Worked with React.js and modern frontend technologies',
            'Collaborated with cross-functional teams to deliver high-quality UI components',
        ],
        type: 'Full-time',
        color: '#6366f1',
    },
    {
        role: 'Banking Assistant (Internship)',
        company: 'Bank of Ceylon',
        period: 'Jan 2023 - Apr 2023',
        description: [
            'Assisted in managing customer savings accounts and day-to-day banking operations',
            'Gained hands-on experience with banking systems and financial processes',
            'Developed strong communication and customer service skills',
        ],
        type: 'Internship',
        color: '#0ea5e9',
    },
    {
        role: 'Banking Assistant (Internship)',
        company: "People's Bank",
        period: 'Apr 2022 - Oct 2022',
        description: [
            'Experienced in cashier operations, bank email management, and general banking services',
            'Ensured efficient handling of financial transactions and customer support',
            'Built professional skills in a fast-paced banking environment',
        ],
        type: 'Internship',
        color: '#10b981',
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 relative" ref={ref}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.75rem] sm:text-[0.8rem] font-medium text-primary-400 uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        Career
                    </span>
                    <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-extrabold text-gradient leading-tight mb-3 sm:mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-[0.95rem] sm:text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.6] sm:leading-[1.7] px-4 sm:px-0">
                        My journey through different roles and organizations
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-[800px] mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-emerald-500 to-transparent" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            className="relative pl-12 sm:pl-[60px] mb-8 sm:mb-10 last:mb-0"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.2 }}
                        >
                            {/* Dot */}
                            <div
                                className="absolute left-[11px] sm:left-[13px] top-6 sm:top-7 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full z-2 ring-2 ring-white/10"
                                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}44` }}
                            />

                            {/* Card */}
                            <div className="glass-card glass-card-hover p-5 sm:p-6 md:p-7">
                                <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-2">
                                    <span
                                        className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 border rounded-full"
                                        style={{ color: exp.color, borderColor: `${exp.color}44` }}
                                    >
                                        {exp.type}
                                    </span>
                                    <span className="flex items-center gap-1 sm:gap-1.5 font-mono text-[0.75rem] sm:text-[0.8rem] text-slate-500">
                                        <FiCalendar className="text-xs sm:text-sm" /> {exp.period}
                                    </span>
                                </div>

                                <h3 className="text-[1.05rem] sm:text-[1.2rem] font-bold mb-1 sm:mb-1.5">{exp.role}</h3>
                                <p className="flex items-center gap-1 sm:gap-1.5 text-[0.85rem] sm:text-[0.9rem] font-semibold mb-3 sm:mb-4" style={{ color: exp.color }}>
                                    <FiBriefcase className="text-sm sm:text-base" /> {exp.company}
                                </p>

                                <ul className="flex flex-col gap-1.5 sm:gap-2">
                                    {exp.description.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 sm:gap-2.5 text-[0.82rem] sm:text-[0.88rem] text-slate-400 leading-[1.5] sm:leading-[1.6]">
                                            <span className="w-1.5 h-1.5 min-w-[6px] rounded-full mt-1.5 sm:mt-2" style={{ background: exp.color }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
