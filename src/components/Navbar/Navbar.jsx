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
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
                ? 'py-3 sm:py-4 bg-brand-black border-b-2 border-brand-white'
                : 'py-4 sm:py-6 bg-brand-black border-b-2 border-brand-white lg:bg-transparent lg:border-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#intro"
                    className="font-display text-xl sm:text-2xl font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105 z-50 relative uppercase"
                    onClick={(e) => handleClick(e, '#intro')}
                >
                    <span className="text-brand-white bg-brand-blue px-2 border border-brand-white">JG</span>
                    <span className="text-brand-neon">/ DEV</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`px-4 py-2 font-mono text-sm uppercase font-bold border-2 transition-all duration-300
                                    ${activeSection === link.href.slice(1)
                                        ? 'border-brand-neon bg-brand-neon text-brand-black shadow-[2px_2px_0px_0px_var(--color-brand-white)]'
                                        : 'border-transparent text-brand-white hover:border-brand-white hover:bg-brand-white hover:text-brand-black'
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
                    className="hidden lg:inline-flex items-center brutalist-button px-6 py-2.5 shadow-[2px_2px_0px_0px_var(--color-brand-white)]"
                >
                    RESUME
                </a>

                {/* Mobile Toggle */}
                <button
                    className="flex lg:hidden items-center justify-center w-10 h-10 bg-brand-black border-2 border-brand-white text-brand-white text-2xl hover:bg-brand-neon hover:text-brand-black transition-all z-50"
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
                        className="overflow-hidden bg-brand-black border-t-2 border-brand-white absolute w-full left-0 top-[100%]"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="px-4 sm:px-6 py-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className={`block px-4 py-3 font-mono text-base uppercase font-bold border-2 transition-all duration-300 ${activeSection === link.href.slice(1)
                                            ? 'border-brand-neon bg-brand-neon text-brand-black shadow-[4px_4px_0px_0px_var(--color-brand-white)]'
                                            : 'border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black shadow-[4px_4px_0px_0px_var(--color-brand-neon)]'
                                            }`}
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="mt-4"
                            >
                                <a
                                    href={resume}
                                    download="Jeewan's Resume"
                                    className="block text-center px-5 py-4 brutalist-button w-full shadow-[4px_4px_0px_0px_var(--color-brand-white)] text-lg"
                                >
                                    DOWNLOAD RESUME
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
