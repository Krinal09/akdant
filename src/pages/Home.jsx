import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import ServicesSection from "../components/ServicesSection";
import { projects } from "../data/projects";

function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <section className="bg-charcoal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured Projects</p>
              <h2 className="mt-3 font-display text-4xl text-platinum md:text-5xl">
                Signature works with global ambition
              </h2>
            </div>
            <Link to="/projects" className="text-sm uppercase tracking-[0.2em] text-platinum">
              Explore all projects
            </Link>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      <section className="bg-graphite px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"
        >
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
            alt="Studio vision"
            className="h-full min-h-[360px] w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">About Akdant</p>
            <h2 className="mt-3 font-display text-4xl text-platinum">Design intelligence meets craft</h2>
            <p className="mt-5 leading-relaxed text-stone">
              We are an interdisciplinary studio designing architecture, interiors, and urban
              experiences with rigorous thinking and sensual materiality.
            </p>
            <Link
              to="/about"
              className="mt-8 w-fit rounded-full border border-platinum/30 px-6 py-3 text-sm uppercase tracking-[0.15em] text-platinum"
            >
              Discover our story
            </Link>
          </div>
        </motion.div>
      </section>
      <ServicesSection />
      <section className="bg-charcoal px-6 py-24 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Collaborate</p>
          <h2 className="mt-3 font-display text-4xl text-platinum md:text-6xl">
            Let us shape your next landmark
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal"
          >
            Book a consultation
          </Link>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
