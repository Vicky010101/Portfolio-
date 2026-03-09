import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim().length < 2) {
            newErrors.name = 'Please enter your full name.';
        }
        if (!validateEmail(formData.email.trim())) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Please add a subject (min 3 chars).';
        }
        if (formData.message.trim().length === 0) {
            newErrors.message = 'Please enter a message.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');

        if (!validateForm()) {
            setStatus('Please fix the highlighted fields.');
            return;
        }

        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim()
                }
            );
            setStatus('✔ Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('✖ Failed to send message. Try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="section-subtitle">Have an opportunity or idea? I'd love to hear it.</p>
                </header>

                <div className="contact-grid">
                    <div className="contact-info glass">
                        <div className="info-item">
                            <i className="fa-regular fa-envelope"></i>
                            <span><a href="mailto:vrathod07913@gmail.com">vrathod07913@gmail.com</a></span>
                        </div>
                        <div className="info-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>+91 9741794663</span>
                        </div>
                        <div className="info-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Belagavi, India</span>
                        </div>
                        <div className="socials big">
                            <a href="https://linkedin.com/in/vikas-rathod-047496261" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Vicky010101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/call_me_vicky_0101?igsh=MWczbXBkYnB3ZnluZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <form id="contact-form" className="contact-form glass" onSubmit={handleSubmit} noValidate>
                        <div className="row">
                            <div className={`field ${errors.name ? 'error' : ''}`}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.name}
                                    required
                                />
                                {errors.name && <small className="err">{errors.name}</small>}
                            </div>
                            <div className={`field ${errors.email ? 'error' : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.email}
                                    required
                                />
                                {errors.email && <small className="err">{errors.email}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <div className={`field ${errors.subject ? 'error' : ''}`}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Project / Role / Query"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.subject}
                                    required
                                />
                                {errors.subject && <small className="err">{errors.subject}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <div className={`field full ${errors.message ? 'error' : ''}`}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message…"
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.message}
                                    required
                                ></textarea>
                                {errors.message && <small className="err">{errors.message}</small>}
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            <i className="fa-regular fa-paper-plane"></i> Send Message
                        </button>
                        {status && <p id="form-status" role="status" aria-live="polite">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
