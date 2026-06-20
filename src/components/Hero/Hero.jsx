import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import profileImg from '../../assets/portfolio.png';

const Hero = () => {
    return (
        <section id="intro" className="min-h-screen flex items-center relative pt-20 sm:pt-24 overflow-hidden py-12 sm:py-16 md:py-20 bg-brand-black border-b-2 border-brand-white">
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-[60px] items-center relative z-10">
                {/* Content */}
                <motion.div
                    className="order-2 lg:order-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center gap-2 sm:gap-3 mb-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-[1.2rem] sm:text-[1.5rem] inline-block">👋</span>
                        <span className="font-mono text-sm sm:text-base text-brand-white uppercase tracking-widest bg-brand-blue px-2 py-1 border border-brand-white">SYSTEM ONLINE</span>
                    </motion.div>

                    <motion.h1
                        className="text-[clamp(3rem,8vw,6rem)] font-display font-bold leading-[0.9] mb-6 uppercase text-brand-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        JEEWAN
                        <br />
                        <span className="text-brand-neon">GEETHANGA</span>
                    </motion.h1>

                    <motion.div
                        className="flex items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 px-4 py-3 bg-brand-black border-2 border-brand-white w-fit mx-auto lg:mx-0 shadow-[4px_4px_0px_0px_var(--color-brand-neon)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="font-mono text-sm sm:text-base text-brand-neon">&gt;_</span>
                        <TypeAnimation
                            sequence={[
                                'SOFTWARE ENGINEER', 2000,
                                'AI/ML ENTHUSIAST', 2000,
                                'FULLSTACK DEVELOPER', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-mono text-sm sm:text-base text-brand-white font-bold"
                        />
                    </motion.div>

                    <motion.p
                        className="font-mono text-sm sm:text-base md:text-lg text-brand-white leading-relaxed mb-8 max-w-[600px] mx-auto lg:mx-0 px-4 lg:px-0 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        IT undergraduate at University of Moratuwa. <br />
                        <span className="text-brand-blue">Expertise in building Web and Mobile full-stack applications.</span> <br />
                        Passionate about AI, Machine Learning, and DevOps.
                    </motion.p>

                    <motion.div
                        className="flex gap-4 mb-8 flex-wrap justify-center lg:justify-start px-2 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a
                            href="#contact"
                            className="brutalist-button px-8 py-4 font-bold flex items-center gap-2"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            INITIATE CONTACT <FiArrowRight className="text-lg" />
                        </a>
                        <a
                            href="#projects"
                            className="bg-brand-white text-brand-black font-mono font-bold uppercase px-8 py-4 border-2 border-brand-white hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue transition-all flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            VIEW BUILDS
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-4 justify-center lg:justify-start"
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
                                className="w-12 h-12 flex items-center justify-center bg-brand-black border-2 border-brand-white text-brand-white text-xl transition-all duration-300 hover:bg-brand-neon hover:text-brand-black hover:border-brand-neon"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="order-1 lg:order-2 flex justify-center items-center relative mb-12 lg:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-neon translate-x-4 translate-y-4 border-2 border-brand-black" />
                        <img
                            src={profileImg}
                            alt="Jeewan Geethanga"
                            className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] object-cover relative z-10 border-4 border-brand-white bg-brand-black grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Floating badges */}
                    {[
                        { text: 'SOFTWARE', pos: 'top-10 -right-4 md:-right-10', anim: [0, -10, 0], dur: 3 },
                        { text: 'AI/ML', pos: '-bottom-4 -left-4 md:-left-10', anim: [0, 10, 0], dur: 3.5 },
                        { text: 'DEVOPS', pos: 'bottom-20 -right-4 md:-right-8', anim: [0, -8, 0], dur: 4 },
                    ].map((b) => (
                        <motion.div
                            key={b.text}
                            className={`absolute ${b.pos} hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-blue border-2 border-brand-white text-brand-white font-display font-bold text-sm z-20 uppercase shadow-[4px_4px_0px_0px_#000000]`}
                            animate={{ y: b.anim }}
                            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <span>{b.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
