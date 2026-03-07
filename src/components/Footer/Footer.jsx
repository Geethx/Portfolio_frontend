import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-1 border-t border-glass-border bg-dark-primary/80 backdrop-blur-xl">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Top */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-6 sm:gap-8 md:gap-10 py-10 sm:py-12 md:py-14">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="font-mono text-[1.1rem] sm:text-[1.3rem] font-bold inline-flex items-center gap-0.5 mb-2 sm:mb-3"
                            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                        >
                            <span className="text-primary-400">&lt;</span>
                            <span className="text-gradient">JG</span>
                            <span className="text-primary-400"> /&gt;</span>
                        </a>
                        <p className="text-slate-400 text-[0.8rem] sm:text-[0.85rem] max-w-[300px]">
                            Building digital experiences with modern technologies
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[0.75rem] sm:text-[0.82rem] font-semibold uppercase tracking-[1.5px] text-slate-500 mb-3 sm:mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-2 sm:gap-2.5">
                            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-[0.85rem] sm:text-[0.9rem] text-slate-400 w-fit transition-all duration-300 hover:text-primary-400 hover:translate-x-1"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-[0.75rem] sm:text-[0.82rem] font-semibold uppercase tracking-[1.5px] text-slate-500 mb-3 sm:mb-4">Connect</h4>
                        <div className="flex gap-2 sm:gap-2.5">
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
                                    className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-surface-2 border border-glass-border
                    text-slate-400 text-base sm:text-[1.05rem] transition-all duration-300
                    hover:text-primary-400 hover:border-primary-500 hover:-translate-y-[3px]"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-5 border-t border-glass-border gap-3 sm:gap-0">
                    <p className="text-[0.8rem] sm:text-[0.85rem] text-slate-500 flex items-center gap-1">
                        © {new Date().getFullYear()} Jeewan Geethanga.</p>
                    <button
                        className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-full gradient-primary text-white text-base sm:text-lg
              shadow-[0_4px_15px_rgba(99,102,241,0.3)] transition-all duration-300
              hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)]"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
