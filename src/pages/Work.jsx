import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand Identity",
    desc: "Minimal branding systems for modern businesses."
  },
  {
    title: "Book Production",
    desc: "Print-ready layouts for offset and digital printing."
  },
  {
    title: "React Portfolio",
    desc: "Modern web portfolio with animations and deployment."
  }
];

function Work() {
  return (
    <section className="work">
      <h2>Selected Work</h2>
      <div className="grid">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="card"
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;