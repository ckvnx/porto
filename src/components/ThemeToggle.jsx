import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="toggle-icon"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;