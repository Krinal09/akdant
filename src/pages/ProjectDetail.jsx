import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="bg-charcoal pt-20 text-platinum">
      <section className="relative min-h-[70vh]">
        <img src={project.heroImage} alt={project.title} className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">{project.category}</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl">{project.title}</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="font-display text-3xl">Project Narrative</h2>
          <p className="mt-4 leading-relaxed text-stone">{project.description}</p>
          <h3 className="mt-8 font-display text-2xl text-platinum">Concept</h3>
          <p className="mt-3 leading-relaxed text-stone">{project.concept}</p>
        </motion.div>
        <aside className="space-y-4 rounded-2xl border border-platinum/10 bg-graphite/50 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Details</p>
          <p className="text-sm text-stone">Location: {project.location}</p>
          <p className="text-sm text-stone">Year: {project.year}</p>
          <p className="text-sm text-stone">Area: {project.area}</p>
          <div>
            <p className="mb-2 text-sm text-platinum">Materials</p>
            <ul className="space-y-1 text-sm text-stone">
              {project.materials.map((material) => (
                <li key={material}>- {material}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <h2 className="mb-6 font-display text-3xl">Image Gallery</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="rounded-2xl"
        >
          {project.gallery.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={project.title} className="h-[520px] w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10">
        <h2 className="mb-6 font-display text-3xl">Before / After</h2>
        <BeforeAfterSlider
          beforeImage={project.beforeAfter.before}
          afterImage={project.beforeAfter.after}
        />
      </section>
      <div className="pb-16 text-center">
        <Link to="/projects" className="text-sm uppercase tracking-[0.2em] text-accent">
          Back to projects
        </Link>
      </div>
    </article>
  );
}

export default ProjectDetail;
