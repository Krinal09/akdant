import { MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-charcoal px-6 pb-20 pt-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-3 font-display text-5xl text-platinum md:text-6xl">Let's Talk Design</h1>
          <p className="mt-5 max-w-lg text-stone">
            Share your vision and project requirements. We will get back with a curated design
            strategy and engagement roadmap.
          </p>
          <div className="mt-8 rounded-2xl border border-platinum/10 bg-graphite/50 p-6">
            <p className="text-sm text-platinum">Studio Address</p>
            <p className="mt-2 text-stone">12th Floor, Axis One, BKC, Mumbai, India</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-charcoal"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
        <div className="space-y-6">
          <form className="space-y-4 rounded-2xl border border-platinum/10 bg-graphite/50 p-7">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-platinum/15 bg-charcoal px-4 py-3 text-platinum outline-none placeholder:text-stone"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-platinum/15 bg-charcoal px-4 py-3 text-platinum outline-none placeholder:text-stone"
            />
            <input
              type="text"
              placeholder="Project Type"
              className="w-full rounded-lg border border-platinum/15 bg-charcoal px-4 py-3 text-platinum outline-none placeholder:text-stone"
            />
            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full rounded-lg border border-platinum/15 bg-charcoal px-4 py-3 text-platinum outline-none placeholder:text-stone"
            />
            <button
              type="button"
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal"
            >
              Submit Inquiry
            </button>
          </form>
          <div className="h-56 rounded-2xl border border-platinum/10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
            <div className="flex h-full items-end rounded-2xl bg-black/40 p-4">
              <p className="text-sm text-platinum">Map Placeholder - Studio Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
