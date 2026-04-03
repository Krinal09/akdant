import { motion } from "framer-motion";

const timeline = [
  { year: "2013", event: "Akdant Associates launched with a vision to create context-first architecture." },
  { year: "2017", event: "Expanded into luxury interiors and full design-build consultation." },
  { year: "2021", event: "Delivered multi-city residential and commercial projects." },
  { year: "2026", event: "Recognized as a premium studio for timeless, climate-aware spaces." },
];

const values = [
  {
    title: "Design With Purpose",
    description: "Every project begins with intent — to improve experience, function, and wellbeing.",
  },
  {
    title: "Craft & Detail",
    description: "Precision and detailing define the language of our architecture.",
  },
  {
    title: "Context Driven",
    description: "We design with climate, culture, and surroundings in mind.",
  },
];

function About() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-28">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            About
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-display leading-tight tracking-tight">
            Timeless spaces.{" "}
            <span className="text-[#d6b25e]">Meaningful design.</span>
          </h1>
        </motion.div>

        {/* WHO WE ARE */}
        <div className="mt-20 max-w-3xl">
          <h2 className="text-3xl font-display">Who We Are</h2>

          <div className="mt-6 space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Akdant Associates is an architecture and interior design studio
              focused on creating contemporary, high-quality spaces.
            </p>
            <p>
              We combine strategic thinking, material sensitivity, and technical
              precision to deliver designs that are elegant, functional, and timeless.
            </p>
            <p>
              Each project is approached as a unique narrative shaped into a
              meaningful built experience.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* FOUNDER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full"
                alt="Founder"
              />
              {/* subtle ring */}
              <div className="absolute inset-0 rounded-full border border-[#d6b25e]/30 scale-110"></div>
            </div>
          </div>

          {/* TEXT */}
          <div className="md:-ml-6 lg:-ml-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Founder
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-display">
              Bhargav Patel
            </h3>

            <div className="mt-6 space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                The vision is to create architecture that balances clarity,
                emotion, and responsibility.
              </p>
              <p>
                Each project is designed with a deep understanding of context,
                proportion, and human experience.
              </p>
              <p>
                The goal is not just to design spaces, but to shape environments
                that feel timeless and perform beautifully in everyday life.
              </p>
            </div>
          </div>
        </motion.div>

        {/* VALUES */}
        <div className="mt-28 grid md:grid-cols-3 gap-14">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-2xl font-display group-hover:text-[#d6b25e] transition">
                {value.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* JOURNEY */}
        <div className="mt-32">
          <h2 className="text-4xl font-display">Our Journey</h2>

          <div className="mt-12 border-l border-gray-800 pl-8 space-y-12">
            {timeline.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* dot */}
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 bg-[#d6b25e] rounded-full"></div>

                <p className="text-sm text-gray-500">{step.year}</p>
                <p className="mt-1 text-gray-300 text-lg">{step.event}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;