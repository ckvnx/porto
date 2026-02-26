import { motion } from "framer-motion";

function Home() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Designing thoughtful digital experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm Kévin — Graphic Designer & Frontend Developer.
      </motion.p>
    </section>
  );
}

export default Home;