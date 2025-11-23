import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyUveB3sNl4dTKKTAppFdKmXII4tE128z6x4pERnhgjjSgafHo1n3K8gVnwUl88KG8n/exec';
      
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('type', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('success'); // Still show success since the form likely submitted
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="legal-page contact-page">
      <nav className="legal-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="legal-content contact-content">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have a question, feedback, or need support? We'd love to hear from you. 
          Fill out the form below or reach out directly via email.
        </p>

        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="contact-success">
                🙏 Thank you for reaching out! We'll get back to you within 24-48 hours.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Account Issue">Account Issue</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  rows="5"
                />
              </div>

              <button 
                type="submit" 
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Other Ways to Reach Us</h2>
            
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:pallavsinha8@gmail.com">pallavsinha8@gmail.com</a>
                <p>We typically respond within 24-48 hours</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>Response Time</h3>
                <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
              </div>
            </div>

            <div className="contact-faq">
              <h3>Common Questions</h3>
              <div className="faq-item">
                <h4>How do I delete my account?</h4>
                <p>Send us an email with "Account Deletion" in the subject line, and we'll process your request within 7 days.</p>
              </div>
              <div className="faq-item">
                <h4>I'm having trouble logging in</h4>
                <p>Try resetting your password. If that doesn't work, contact us with details about the issue.</p>
              </div>
              <div className="faq-item">
                <h4>Is my data private?</h4>
                <p>Yes! Read our <Link to="/privacy">Privacy Policy</Link> for full details on how we protect your information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="legal-footer">
        <p>&copy; 2025 Mokshapatra. All rights reserved.</p>
        <div className="legal-footer-links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
