import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-platinum/10 bg-charcoal px-6 py-12 text-stone">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-platinum">Akdant Associates</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            We craft architecture and interiors that fuse performance, emotion, and timeless
            aesthetics.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">Explore</p>
          <div className="space-y-2 text-sm">
            <Link to="/projects" className="block hover:text-platinum">
              Projects
            </Link>
            <Link to="/about" className="block hover:text-platinum">
              About
            </Link>
            <Link to="/services" className="block hover:text-platinum">
              Services
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
          <p className="text-sm">hello@akdantassociates.com</p>
          <p className="text-sm">+91 98765 43210</p>
          <p className="mt-2 text-sm">
            12th Floor, Axis One, Bandra Kurla Complex, Mumbai, Maharashtra 400051
          </p>
          <p className="mt-2 text-sm">Mumbai | Bengaluru | Ahmedabad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
