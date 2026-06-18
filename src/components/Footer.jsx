import { motion } from "framer-motion";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          <a
            href="mailto:hello@ckvnx.com"
            aria-label="Email"
          >
            <EmailOutlinedIcon />
          </a>

          <a
            href="https://x.com/ckkvnx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <TwitterIcon />
          </a>

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
