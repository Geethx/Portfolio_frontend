import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 border-t-4 border-brand-white bg-brand-blue text-brand-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 py-12 md:py-16">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="font-display text-2xl font-bold inline-flex items-center gap-2 mb-4 uppercase"
                            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                        >
                            <span className="bg-brand-black text-brand-white px-2 py-1 border-2 border-brand-white">JG</span>
                            <span className="text-brand-black">/ SYSTEM</span>
                        </a>
                        <p className="font-mono text-sm font-bold uppercase max-w-[300px] text-brand-black">
                            BUILDING DIGITAL EXPERIENCES WITH MODERN TECHNOLOGIES
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-lg font-bold uppercase text-brand-black mb-6 border-b-2 border-brand-black pb-2 inline-block">SYSTEM LINKS</h4>
                        <nav className="flex flex-col gap-3">
                            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="font-mono text-sm font-bold uppercase w-fit transition-colors hover:text-brand-black hover:bg-brand-white px-2 py-1 border-2 border-transparent hover:border-brand-black"
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
                        <h4 className="font-display text-lg font-bold uppercase text-brand-black mb-6 border-b-2 border-brand-black pb-2 inline-block">NETWORK</h4>
                        <div className="flex gap-4">
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
                                    className="w-12 h-12 flex items-center justify-center border-2 border-brand-black bg-brand-white text-brand-black text-xl transition-all hover:bg-brand-black hover:text-brand-white hover:shadow-[4px_4px_0px_0px_var(--color-brand-neon)]"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t-2 border-brand-black gap-4">
                    <p className="font-mono text-sm font-bold uppercase text-brand-black">
                        © {new Date().getFullYear()} JEEWAN GEETHANGA. ALL RIGHTS RESERVED.</p>
                    <button
                        className="w-12 h-12 flex items-center justify-center border-2 border-brand-black bg-brand-neon text-brand-black text-xl transition-all hover:bg-brand-black hover:text-brand-neon hover:shadow-[4px_4px_0px_0px_var(--color-brand-white)]"
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
