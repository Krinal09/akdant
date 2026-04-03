import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
        alt="Modern architecture"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-accent"
        >
          Architecture + Interior Design
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-4xl font-display text-5xl leading-tight text-platinum md:text-7xl"
        >
          Designing Spaces That Define Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-base text-platinum/80 md:text-lg"
        >
          Akdant Associates crafts deeply contextual architecture and interior experiences for
          visionary clients across residential, commercial, and hospitality domains.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal transition hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-platinum/40 px-7 py-3 text-sm uppercase tracking-[0.14em] text-platinum transition hover:bg-platinum hover:text-charcoal"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
