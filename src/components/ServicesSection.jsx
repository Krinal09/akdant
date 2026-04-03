import { motion } from "framer-motion";
import { Building2, House, LampDesk, Ruler, TreePine, Wrench } from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    description: "Concept-to-execution design for residential and institutional architecture.",
    icon: Building2,
  },
  {
    title: "Interior Environments",
    description: "Premium interiors crafted through material, light, and detailing excellence.",
    icon: LampDesk,
  },
  {
    title: "Master Planning",
    description: "Large-scale planning strategies for campuses, mixed-use, and urban districts.",
    icon: TreePine,
  },
  {
    title: "Residential Villas",
    description: "Bespoke residences balancing family lifestyle, context, and climate.",
    icon: House,
  },
  {
    title: "Project Management",
    description: "Execution oversight, quality control, and schedule governance.",
    icon: Wrench,
  },
  {
    title: "Detail Engineering",
    description: "Precision-driven technical detailing for beautiful, buildable outcomes.",
    icon: Ruler,
  },
];

function ServicesSection() {
  return (
    <section className="bg-graphite px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Services</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-platinum md:text-5xl">
          Strategic design services for future-ready spaces
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="group rounded-2xl border border-platinum/10 bg-charcoal/70 p-7 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <service.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-5 font-display text-2xl text-platinum">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
