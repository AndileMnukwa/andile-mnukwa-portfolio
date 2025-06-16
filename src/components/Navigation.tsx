
import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Facebook } from 'lucide-react';
import { smoothScrollToSection } from '../utils/smoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
    { id: 'facts', label: 'Facts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    smoothScrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold font-poppins text-navy-dark transform hover:scale-105 transition-transform duration-300">
            Andile Mnukwa
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium transition-all duration-300 hover:text-coral relative group ${
                  activeSection === item.id ? 'text-coral' : 'text-gray-blue'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-coral transform origin-left transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/mnukwaandile/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/AndileMnukwa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.facebook.com/home.php" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy-dark hover:text-coral transition-all duration-300 transform hover:scale-110"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg shadow-xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 font-medium transition-all duration-300 hover:text-coral transform hover:translate-x-2 ${
                  activeSection === item.id ? 'text-coral bg-coral/10' : 'text-gray-blue'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center space-x-6 pt-4 border-t">
              <a 
                href="https://www.linkedin.com/in/mnukwaandile/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/AndileMnukwa" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.facebook.com/home.php" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-blue hover:text-coral transition-all duration-300 transform hover:scale-125"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
