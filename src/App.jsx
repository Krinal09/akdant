import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal text-platinum">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="bg-charcoal text-platinum">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
