import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Projects', href: '#projects' },
    // { name: 'Publications', href: '#publications' },
    // { name: 'Talks', href: '#talks' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    // If we're on the CV page, navigate to home first
    if (location.pathname === '/cv') {
      navigate('/');
      // Wait a bit for the navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <button
            onClick={() => {
                if (location.pathname === '/cv') {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }}
            className="text-xl font-bold text-gray-900"
            >
            Cyril Bousmar
        </button>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/cv"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={16} />
              <span>CV</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/cv"
                className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                <Download size={16} />
                <span>CV</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 