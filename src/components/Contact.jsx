import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Have a project in mind? Let’s talk.</p>
        </div>

        <div className="contact-grid">

          {/* Contact Form */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Send a Message</h3>

            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Mobile Number" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your Message" rows="4" required />
              <button type="submit">Send Message</button>
            </form>
          </motion.div>

          {/* Book Call */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Book a Call</h3>
            <p>
              Prefer a quick discussion? Schedule a call and let’s connect directly.
            </p>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn"
            >
              Schedule Appointment
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;