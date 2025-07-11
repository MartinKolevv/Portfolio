import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-lead gradient-purple-text">
        Have a project in mind? Let's work together! Feel free to reach out.
      </p>
      <div className="contact-container">
        <div className="contact-info-panel">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>martin.kolev12@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <strong>Phone</strong>
              <p>087 9388 307</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Bulgaria</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div>
              <strong>Available for</strong>
              <p>Freelance & Full-time</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/marty.kv/" target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
            <a href="https://www.linkedin.com/in/martin-kolev-127647350/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project inquiry, collaboration, etc."
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows="5"
            />
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 