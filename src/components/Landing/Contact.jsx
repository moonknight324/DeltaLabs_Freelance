import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import '../../styles/components/contact-form.scss';

/**
 * ContactForm Component
 * 
 * A slide-in, non-scrollable contact form with EmailJS integration for sending emails.
 * This is the merged contact component with full EmailJS functionality.
 * 
 * Features:
 * - Non-scrollable design that fits within viewport
 * - EmailJS integration for email sending
 * - Form validation and submission handling
 * - Success/error status messages
 * - Loading state during submission
 * 
 * @param {boolean} isOpen - Controls the visibility of the form
 * @param {function} onClose - Callback function to close the form
 */
const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        nameCompany: '',
        email: '',
        phone: '',
        project: ''
    });

    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        if (isOpen) {
            // Hide navbar and trigger animation after component mounts
            document.body.classList.add('contact-form-open');
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setIsVisible(false);
            document.body.classList.remove('contact-form-open');
            // Reset form and status when closing
            setSubmitStatus({ type: '', message: '' });
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        // EmailJS configuration
        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

        // Prepare template parameters
        const templateParams = {
            from_name: formData.nameCompany,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.project,
            to_name: 'Delta Labs', // Your company name
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitStatus({
                    type: 'success',
                    message: '✓ Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
                });
                // Reset form after successful submission
                setFormData({
                    nameCompany: '',
                    email: '',
                    phone: '',
                    project: ''
                });
                setIsSubmitting(false);
                // Auto close form after 3 seconds
                setTimeout(() => {
                    handleClose();
                }, 3000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setSubmitStatus({
                    type: 'error',
                    message: '✕ Oops! Something went wrong. Please try again or email us directly at deltalabs.in@gmail.com'
                });
                setIsSubmitting(false);
            });
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300); // Wait for animation to complete
    };

    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay itself, not the form container
        if (e.target.classList.contains('contact-form-overlay')) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="contact-form-overlay" onClick={handleOverlayClick}>
            <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
                <button className="contact-form__close" onClick={handleClose} aria-label="Close form">
                    ×
                </button>

                <div className="contact-form__content">
                    <div className="contact-form__header">
                        <h2 className="contact-form__heading">
                            Hey! Tell us<br />
                            all the things
                        </h2>
                    </div>

                    <form className="contact-form__form" onSubmit={handleSubmit}>
                        <div className="contact-form__row">
                            <div className="contact-form__field">
                                <label className="contact-form__label">Name & Company</label>
                                <input
                                    type="text"
                                    name="nameCompany"
                                    className="contact-form__input"
                                    placeholder="John from Apple"
                                    value={formData.nameCompany}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label className="contact-form__label">Your Email</label>
                                <div className="contact-form__input-wrapper">
                                    <input
                                        type="email"
                                        name="email"
                                        className="contact-form__input"
                                        placeholder="john@apple.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="contact-form__input-icon">✓</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form__field contact-form__field--full">
                            <label className="contact-form__label">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="contact-form__input"
                                placeholder="+91 98821 32143"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="contact-form__field contact-form__field--full">
                            <label className="contact-form__label">Tell us more about your project</label>
                            <textarea
                                name="project"
                                className="contact-form__textarea"
                                placeholder="Something about your great idea"
                                rows="10"
                                value={formData.project}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Status Message */}
                        {submitStatus.message && (
                            <div className={`contact-form__status contact-form__status--${submitStatus.type}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <div className="contact-form__footer">
                            <p className="contact-form__email">Our Email deltalabs.in@gmail.com</p>
                            <button 
                                type="submit" 
                                className="contact-form__submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="contact-form__spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>Submit the request →</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

ContactForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

/**
 * Contact Component
 * 
 * Main contact section component that provides a trigger button for the contact form.
 * This component manages the state of the ContactForm (open/closed).
 * 
 * The ContactForm includes:
 * - Non-scrollable design
 * - EmailJS integration for email sending
 * - Form validation and error handling
 * - Responsive design with slide-in animation
 * 
 * @example
 * // Import and use in your component
 * import Contact from './components/Landing/Contact';
 * 
 * function App() {
 *   return <Contact />;
 * }
 */
function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>Have a project in mind? Let&apos;s talk about it!</p>
        
        <button 
          onClick={handleOpenForm}
          className="contact-button"
          aria-label="Open contact form"
        >
          Contact Us
        </button>
      </div>

      {/* Contact Form with EmailJS Integration */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
      />
    </div>
  );
}

export default Contact;
export { ContactForm };
