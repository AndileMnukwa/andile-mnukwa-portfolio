
import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Facebook } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold font-poppins text-navy-dark">
            Andile Mnukwa
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-coral ${
                  activeSection === item.id ? 'text-coral' : 'text-gray-blue'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy-dark hover:text-coral transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 font-medium transition-colors duration-300 hover:text-coral ${
                  activeSection === item.id ? 'text-coral' : 'text-gray-blue'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center space-x-6 pt-4 border-t">
              <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-blue hover:text-coral transition-colors duration-300">
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
