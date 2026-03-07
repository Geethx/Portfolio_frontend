import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import resume from '../../assets/Jeewan_Geethanga_SE.pdf';

const navLinks = [
    { name: 'Intro', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = navLinks.map(l => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsMobileOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[1000] py-5 transition-all duration-300 ${isScrolled
                ? 'py-3 bg-dark-primary/85 backdrop-blur-xl border-b border-glass-border'
                : ''
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#intro"
                    className="font-mono text-[1.4rem] font-bold flex items-center gap-0.5 transition-transform duration-300 hover:scale-105"
                    onClick={(e) => handleClick(e, '#intro')}
                >
                    <span className="text-primary-400">&lt;</span>
                    <span className="text-gradient">JG</span>
                    <span className="text-primary-400"> /&gt;</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`px-4 py-2 text-[0.88rem] font-medium rounded-full transition-all duration-300 relative
                  after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-0.5
                  after:rounded-full after:transition-all after:duration-300 after:gradient-primary
                  ${activeSection === link.href.slice(1)
                                        ? 'text-primary-400 after:w-5'
                                        : 'text-slate-400 hover:text-slate-100 after:w-0'
                                    }`}
                                onClick={(e) => handleClick(e, link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume CTA */}
                <a
                    href={resume}
                    download="Jeewan's Resume"
                    className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
            gradient-primary text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)]
            hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300"
                >
                    Download Resume
                </a>

                {/* Mobile Toggle */}
                <button
                    className="flex lg:hidden bg-transparent text-slate-100 text-2xl p-2"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="overflow-hidden bg-dark-primary/95 backdrop-blur-xl border-t border-glass-border"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="px-6 py-5 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${activeSection === link.href.slice(1)
                                            ? 'text-primary-400 bg-primary-500/10'
                                            : 'text-slate-400 hover:text-primary-400 hover:bg-primary-500/10'
                                            }`}
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
