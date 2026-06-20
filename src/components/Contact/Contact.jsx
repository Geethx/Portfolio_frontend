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

        if (!backendUrl) {
            setStatus({
                type: 'error',
                message: 'SYSTEM ERROR: BACKEND NOT CONFIGURED.',
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
            setStatus({
                type: 'error',
                message: err.response?.data?.message || 'TRANSMISSION FAILED. PLEASE TRY AGAIN.',
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = `w-full px-4 py-3 bg-brand-black border-2 border-brand-white font-mono text-sm uppercase text-brand-white outline-none placeholder:text-gray-500 focus:border-brand-neon focus:shadow-[4px_4px_0px_0px_var(--color-brand-neon)] transition-all`;

    return (
        <section id="contact" className="py-16 sm:py-24 bg-brand-black border-b-2 border-brand-white relative" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 border-b-2 border-brand-white pb-6 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block font-mono text-sm font-bold text-brand-white bg-brand-blue uppercase tracking-widest mb-4 px-4 py-2 border-2 border-brand-white shadow-[4px_4px_0px_0px_#ffffff]">
                        CONTACT
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-brand-white leading-none uppercase">
                        GET IN TOUCH
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="font-display text-3xl font-bold mb-6 leading-tight uppercase">
                            LET'S BUILD SOMETHING <span className="text-brand-black bg-brand-neon px-2">AMAZING</span> TOGETHER
                        </h3>
                        <p className="font-mono text-brand-white text-sm leading-relaxed mb-10 uppercase border-l-4 border-brand-neon pl-4">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be
                            part of your vision. Feel free to reach out!
                        </p>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-6 mb-10">
                            {[
                                { icon: <FiMail />, label: 'EMAIL', value: 'jeewangeethanga@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jeewangeethanga@gmail.com' },
                                { icon: <FiPhone />, label: 'PHONE', value: '+94 71 488 9510', href: 'tel:+94714889510' },
                                { icon: <FiMapPin />, label: 'LOCATION', value: 'SRI LANKA' },
                            ].map((d) => (
                                <div key={d.label} className="flex items-center gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center bg-brand-black border-2 border-brand-white text-brand-white text-xl">
                                        {d.icon}
                                    </div>
                                    <div>
                                        <span className="block font-mono text-xs font-bold text-brand-neon uppercase tracking-widest mb-1">{d.label}</span>
                                        {d.href ? (
                                            <a href={d.href} target="_blank" rel="noreferrer" className="font-mono text-sm uppercase font-bold hover:text-brand-blue transition-colors break-all">
                                                {d.value}
                                            </a>
                                        ) : (
                                            <span className="font-mono text-sm uppercase font-bold">{d.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaGithub />, href: 'https://github.com/Geethx' },
                                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jeewan-geethanga-2a0b002a8' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 flex items-center justify-center border-2 border-brand-white bg-brand-black text-brand-white text-xl transition-all hover:bg-brand-neon hover:text-brand-black hover:border-brand-neon"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="brutalist-card p-6 sm:p-8"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block font-mono text-xs font-bold mb-2 uppercase">NAME</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="YOUR NAME" required className={inputClasses} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-mono text-xs font-bold mb-2 uppercase">EMAIL</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="EMAIL@DOMAIN.COM" required className={inputClasses} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block font-mono text-xs font-bold mb-2 uppercase">SUBJECT</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="PROJECT INQUIRY" required className={inputClasses} />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block font-mono text-xs font-bold mb-2 uppercase">MESSAGE</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="TELL ME ABOUT..." required rows={5} className={`${inputClasses} resize-y min-h-[140px]`} />
                        </div>

                        {status.message && (
                            <div className={`font-mono text-sm font-bold uppercase p-4 mb-6 border-2 flex items-center gap-2 ${status.type === 'success'
                                ? 'bg-brand-neon text-brand-black border-brand-black'
                                : 'bg-brand-red text-brand-white border-brand-white'
                                }`}>
                                {status.type === 'success' ? <FiCheckCircle className="text-xl" /> : <FiAlertCircle className="text-xl" />}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="brutalist-button w-full px-8 py-4 font-bold flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_var(--color-brand-white)] disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-brand-neon border-t-transparent animate-spin" />
                                    <span>TRANSMITTING...</span>
                                </>
                            ) : (
                                <>
                                    <span>SEND MESSAGE</span> <FiSend />
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
