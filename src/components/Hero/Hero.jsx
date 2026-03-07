import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import profileImg from '../../assets/portfolio.png';

const Hero = () => {
    return (
        <section id="intro" className="min-h-screen flex items-center relative pt-16 sm:pt-20 overflow-hidden py-16 sm:py-20 md:py-24">
            {/* Background glows */}
            <div className="absolute w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-primary-600 -top-[100px] sm:-top-[150px] md:-top-[200px] -left-[100px] sm:-left-[150px] md:-left-[200px] blur-[80px] md:blur-[100px] opacity-15 pointer-events-none -z-1" />
            <div className="absolute w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-accent-500 -bottom-[100px] sm:-bottom-[150px] md:-bottom-[200px] -right-[100px] sm:-right-[150px] md:-right-[200px] blur-[80px] md:blur-[100px] opacity-10 pointer-events-none -z-1" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-[60px] items-center relative z-1">
                {/* Content */}
                <motion.div
                    className="order-2 lg:order-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-[1.3rem] sm:text-[1.6rem] inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
                        <span className="font-mono text-[0.85rem] sm:text-[0.95rem] text-slate-400 tracking-wider">Hello, I'm</span>
                    </motion.div>

                    <motion.h1
                        className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-[1.1] mb-5 -tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Jeewan
                        <br />
                        <span className="text-gradient">Geethanga</span>
                    </motion.h1>

                    <motion.div
                        className="flex items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6 px-4 sm:px-5 py-2.5 sm:py-3 bg-surface-2 border border-glass-border rounded-xl w-fit mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="font-mono text-[0.8rem] sm:text-[0.9rem] text-emerald-400">&gt;_</span>
                        <TypeAnimation
                            sequence={[
                                'Software Engineer', 2000,
                                'AI/ML Enthusiast', 2000,
                                'Shopify Developer', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-mono text-sm sm:text-base text-primary-400 font-medium"
                        />
                    </motion.div>

                    <motion.p
                        className="text-[0.95rem] sm:text-[1.05rem] text-slate-400 leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-8 max-w-[500px] mx-auto lg:mx-0 px-2 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        IT undergraduate at University of Moratuwa with expertise in
                        building Web and Mobile full-stack applications. Passionate about AI, Machine Learning, and DevOps.
                    </motion.p>

                    <motion.div
                        className="flex gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[0.85rem] sm:text-[0.95rem] font-semibold
                gradient-primary text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get In Touch <FiArrowRight className="text-sm sm:text-base" />
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[0.85rem] sm:text-[0.95rem] font-semibold
                bg-transparent text-slate-100 border-[1.5px] border-glass-border
                hover:border-primary-500 hover:bg-primary-500/10 hover:-translate-y-0.5 transition-all duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Projects
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-2.5 sm:gap-3 justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        {[
                            { icon: <FiGithub />, href: 'https://github.com/Geethx', label: 'GitHub' },
                            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/jeewan-geethanga-2a0b002a8', label: 'LinkedIn' },
                            { icon: <FiMail />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jeewangeethanga@gmail.com', label: 'Email' },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-surface-2 border border-glass-border
                  text-slate-400 text-base sm:text-lg transition-all duration-300
                  hover:text-primary-400 hover:border-primary-500 hover:bg-primary-500/10 hover:-translate-y-[3px]"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="order-1 lg:order-2 flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                        {/* Rings */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-primary-500/20 animate-[rotate-slow_30s_linear_infinite]" />
                        <div className="absolute -inset-3 sm:-inset-5 rounded-full border border-dashed border-accent-500/15 animate-[rotate-slow_40s_linear_infinite_reverse]" />

                        <img
                            src={profileImg}
                            alt="Jeewan Geethanga"
                            className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full object-cover relative z-2 border-[2px] sm:border-[3px] border-primary-500/30"
                        />

                        {/* Dot pattern */}
                        <div
                            className="absolute w-20 h-20 bottom-5 right-2.5 z-1"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                                backgroundSize: '8px 8px',
                            }}
                        />
                    </div>

                    {/* Floating badges - hidden on mobile */}
                    {[
                        { text: 'Software Engineering', pos: 'top-5 right-5', anim: [0, -10, 0], dur: 3 },
                        { text: 'AI/ML', pos: 'bottom-10 left-0', anim: [0, 10, 0], dur: 3.5 },
                        { text: 'DevOps', pos: 'top-5/7 -right-1/256', anim: [0, -8, 0], dur: 4 },
                    ].map((b) => (
                        <motion.div
                            key={b.text}
                            className={`absolute ${b.pos} hidden lg:flex items-center gap-2 px-4 py-2.5
                bg-dark-secondary/90 backdrop-blur-sm border border-glass-border rounded-full
                text-[0.82rem] font-semibold text-slate-100 z-3
                shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
                            animate={{ y: b.anim }}
                            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <span className="text-base">{b.emoji}</span>
                            <span>{b.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-[50px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="w-px h-10 bg-gradient-to-b from-primary-500 to-transparent animate-[scroll-pulse_2s_ease-in-out_infinite]" />
                <span className="font-mono text-[0.7rem] text-slate-500 tracking-widest uppercase">scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
