import { motion } from "framer-motion";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-inner">
        <p className="copyright">
          © {new Date().getFullYear()} Kévin. All rights reserved.
        </p>

        <div className="socials">
          {/* Email */}
          <a
            href="mailto:hello@ckvnx.in"
            aria-label="Email"
          >
            <EmailOutlinedIcon />
          </a>

          {/* X Official SVG */}
          <a
            href="https://x.com/ckkvnx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2H21.5L14.3 10.19L22.5 22H15.86L10.74 14.91L4.66 22H1.4L9.08 13.2L1.2 2H8.02L12.64 8.42L18.244 2ZM17.1 20H19.02L7 4H5.02L17.1 20Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ckvnx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;