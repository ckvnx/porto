import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import { useState } from "react";

function Contact() {
  const [showCal, setShowCal] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Book a Call</h2>
          <p>Let’s connect and discuss your project.</p>
        </div>

        <div className="contact-center">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {!showCal && (
              <button
                className="book-btn"
                onClick={() => setShowCal(true)}
              >
                Schedule 15 Min Call
              </button>
            )}

            {showCal && (
              <div className="cal-wrapper">
                <Cal calLink="ckvnx/15min" />
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Contact;