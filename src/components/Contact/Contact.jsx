import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const backendUrl = import.meta.env.VITE_BACK_END_BASEURL || 'http://localhost:5000';

        // Debug: Log the URL being used (remove in production)
        console.log('Backend URL:', backendUrl);

        if (!backendUrl) {
            setStatus({
                type: 'error',
                message: 'Backend URL is not configured. Please contact the site administrator.',
            });
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post(`${backendUrl}/api/contact`, formData);
            setStatus({ type: 'success', message: res.data.message });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('Contact form error:', err);
            console.error('Error details:', err.response?.data);

            setStatus({
                type: 'error',
                message: err.response?.data?.message || 'Something went wrong. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = `w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-surface-1 border border-glass-border rounded-xl
    text-slate-100 font-sans text-[0.88rem] sm:text-[0.92rem] transition-all duration-300 outline-none
    placeholder:text-slate-500
    focus:border-primary-500 focus:bg-primary-500/5 focus:ring-[3px] focus:ring-primary-500/10`;

    return (
        <section id="contact" className="py-10 sm:py-14 md:py-18 lg:py-20 relative" ref={ref}>
            <div className="absolute w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-full bg-primary-600 -bottom-[150px] sm:-bottom-[200px] -right-[150px] sm:-right-[200px] blur-[80px] md:blur-[100px] opacity-15 pointer-events-none -z-1" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-[0.7rem] sm:text-[0.75rem] font-medium text-primary-400 uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
                        Contact
                    </span>
                    <h2 className="text-[clamp(1.6rem,7vw,2.8rem)] font-extrabold text-gradient leading-tight mb-2 sm:mb-3">
                        Get In Touch
                    </h2>
                    <p className="text-[0.875rem] sm:text-[0.95rem] md:text-[1.05rem] text-slate-400 max-w-[600px] mx-auto leading-[1.6] sm:leading-[1.7] px-4 sm:px-2 md:px-0">
                        Have a project in mind or want to collaborate? Let's talk!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 md:gap-10 items-start">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] font-extrabold mb-3 sm:mb-4 leading-[1.3]">
                            Let's build something <span className="text-gradient">amazing</span> together
                        </h3>
                        <p className="text-slate-400 text-[0.9rem] sm:text-[0.95rem] leading-[1.6] sm:leading-[1.7] mb-6 sm:mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be
                            part of your vision. Feel free to reach out!
                        </p>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
                            {[
                                { icon: <FiMail />, label: 'Email', value: 'jeewangeethanga@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jeewangeethanga@gmail.com' },
                                { icon: <FiPhone />, label: 'Phone', value: '+94 71 488 9510', href: 'tel:+94714889510' },
                                { icon: <FiMapPin />, label: 'Location', value: 'Sri Lanka' },
                            ].map((d) => (
                                <div key={d.label} className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-11 h-11 min-w-[44px] sm:w-12 sm:h-12 sm:min-w-[48px] flex items-center justify-center bg-primary-500/10 border border-primary-500/20 rounded-xl text-primary-400 text-base sm:text-lg">
                                        {d.icon}
                                    </div>
                                    <div>
                                        <span className="block text-[0.7rem] sm:text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">{d.label}</span>
                                        {d.href ? (
                                            <a href={d.href} target="_blank" rel="noreferrer" className="text-[0.85rem] sm:text-[0.92rem] text-slate-100 font-medium hover:text-primary-400 transition-colors duration-300 break-all">
                                                {d.value}
                                            </a>
                                        ) : (
                                            <span className="text-[0.85rem] sm:text-[0.92rem] text-slate-100 font-medium">{d.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="flex gap-2.5 sm:gap-3">
                            {[
                                { icon: <FaGithub />, href: 'https://github.com/Geethx' },
                                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jeewan-geethanga-2a0b002a8' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-surface-2 border border-glass-border
                    text-slate-400 text-lg sm:text-xl transition-all duration-300
                    hover:text-primary-400 hover:border-primary-500 hover:bg-primary-500/10 hover:-translate-y-0.75"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="glass-card p-6 sm:p-7 md:p-9"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
                            <div>
                                <label htmlFor="name" className="block text-[0.75rem] sm:text-[0.82rem] font-semibold text-slate-400 mb-1.5 sm:mb-2 uppercase tracking-wider">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputClasses} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[0.75rem] sm:text-[0.82rem] font-semibold text-slate-400 mb-1.5 sm:mb-2 uppercase tracking-wider">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className={inputClasses} />
                            </div>
                        </div>

                        <div className="mb-4 sm:mb-5">
                            <label htmlFor="subject" className="block text-[0.75rem] sm:text-[0.82rem] font-semibold text-slate-400 mb-1.5 sm:mb-2 uppercase tracking-wider">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className={inputClasses} />
                        </div>

                        <div className="mb-4 sm:mb-5">
                            <label htmlFor="message" className="block text-[0.75rem] sm:text-[0.82rem] font-semibold text-slate-400 mb-1.5 sm:mb-2 uppercase tracking-wider">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about..." required rows={5} className={`${inputClasses} resize-y min-h-[120px] sm:min-h-[140px]`} />
                        </div>

                        {status.message && (
                            <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-[0.82rem] sm:text-[0.88rem] mb-4 ${status.type === 'success'
                                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                                : 'bg-red-500/10 border border-red-500/30 text-red-400'
                                }`}>
                                {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                                <span className="break-words">{status.message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[0.85rem] sm:text-[0.95rem] font-semibold
                gradient-primary text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300
                disabled:opacity-70 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span> <FiSend />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
