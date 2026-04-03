import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-platinum/10 bg-graphite/40"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className="space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h3 className="font-display text-2xl text-platinum">{project.title}</h3>
          <p className="text-sm leading-relaxed text-stone">{project.shortDescription}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export default ProjectCard;
