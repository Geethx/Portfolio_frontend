import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
    {
        role: 'Software Engineer (Internship)',
        company: 'AIT Services Australia',
        period: 'March 2026 - Present',
        description: [
            'Contributed to the development of a web-based application using newest technologies',
            'Implemented new features and optimized existing code for better performance',
            'Collaborated with a team of developers',
        ],
        type: 'Full-time',
        color: '#ff0000',
    },
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
        color: '#e0ef29',
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
        color: '#0505cb',
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
        color: '#ffffff',
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <Motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-black bg-brand-neon uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#ffffff]">
                        CAREER
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        EXPERIENCE
                    </h2>
                </Motion.div>

                {/* Timeline */}
                <div className="relative mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-brand-white hidden sm:block" />

                    {experiences.map((exp, i) => (
                        <Motion.div
                            key={`${exp.company}-${exp.role}`}
                            className="relative sm:pl-20 mb-12 last:mb-0"
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.2 }}
                        >
                            {/* Square Node */}
                            <div
                                className="absolute left-[1.15rem] sm:left-[1.65rem] top-8 w-6 h-6 border-4 border-brand-black hidden sm:block"
                                style={{ background: exp.color }}
                            />

                            {/* Card */}
                            <div className="brutalist-card p-6 sm:p-8 brutalist-card-hover" style={{ borderLeftWidth: '8px', borderLeftColor: exp.color }}>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                                    <span
                                        className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 bg-brand-black text-brand-white"
                                        style={{ borderColor: exp.color }}
                                    >
                                        {exp.type}
                                    </span>
                                    <span className="flex items-center gap-2 font-mono text-xs uppercase font-bold border-2 border-brand-white px-3 py-1">
                                        <FiCalendar className="text-sm" /> {exp.period}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl font-bold mb-2 uppercase">{exp.role}</h3>
                                <p className="flex items-center gap-2 text-sm sm:text-base font-mono font-bold mb-6 uppercase" style={{ color: exp.color }}>
                                    <FiBriefcase className="text-lg" /> {exp.company}
                                </p>

                                <ul className="flex flex-col gap-3">
                                    {exp.description.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm sm:text-base font-mono uppercase leading-relaxed">
                                            <span className="w-2 h-2 min-w-[8px] mt-2 border border-brand-white" style={{ background: exp.color }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
