import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import { projectCategories, projects } from "../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="min-h-screen bg-charcoal px-6 pb-20 pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Portfolio</p>
        <h1 className="mt-3 font-display text-5xl text-platinum md:text-6xl">Projects</h1>
        <div className="mt-10 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.17em] transition ${
                activeCategory === category
                  ? "border-accent bg-accent text-charcoal"
                  : "border-platinum/25 text-platinum"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <ProjectGrid projects={filteredProjects} />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
