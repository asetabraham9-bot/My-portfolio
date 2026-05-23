import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './app/components/ui/sonner';
import Navbar from './app/components/Navbar';
import Footer from './app/components/Footer';
import ScrollToTop from './app/components/ScrollToTop';
import ScrollToTopOnNav from './app/components/ScrollToTopOnNav';
import Home from './app/pages/Home';
import About from './app/pages/About';
import Skills from './app/pages/Skills';
import Education from './app/pages/Education';
import Projects from './app/pages/Projects';
import Contact from './app/pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTopOnNav />
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}