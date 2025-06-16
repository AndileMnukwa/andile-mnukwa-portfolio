
import { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';
import { smoothScrollToSection } from '../utils/smoothScroll';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const texts = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Software Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    // Trigger content animation after component mounts
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setTypingText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentText.slice(0, prev.length + 1)
        );
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [typingText, currentIndex, isDeleting, texts]);

  const handleDownloadCV = () => {
    fetch('/Andile_Mnukwa_CV.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Andile_Mnukwa_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error downloading CV:', error);
      });
  };
  
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern with Parallax */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy border-4 border-navy-light rounded-full animate-float-medium blur-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-coral-light rounded-full animate-float-fast blur-md" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/3 w-48 h-48 bg-gradient-to-r from-coral to-coral-light rounded-full animate-pulse-slow opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-gradient-to-l from-navy to-navy-light rounded-full animate-pulse-slow opacity-15" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="space-y-8">
          {/* Greeting with enhanced animation */}
          <div className={`transform transition-all duration-1500 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-navy-dark mb-6 animate-fade-in-scale">
              Hello, I'm{' '}
              <span className="text-gradient animate-gradient-shift">Andile Mnukwa</span>
            </h1>
          </div>

          {/* Enhanced Typing Animation */}
          <div className={`h-16 mb-8 transform transition-all duration-1500 delay-300 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-blue">
              I'm a{' '}
              <span className="text-coral font-semibold relative">
                {typingText}
                <span className="animate-pulse-cursor text-coral">|</span>
              </span>
            </p>
          </div>

          {/* Description with staggered animation */}
          <div className={`transform transition-all duration-1500 delay-600 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-blue max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
              Passionate about creating visually appealing and user-friendly digital experiences. 
              I craft clean, efficient code and design intuitive interfaces that deliver exceptional user experiences.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1500 delay-900 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button 
              onClick={handleDownloadCV}
              className="btn-primary flex items-center gap-2 group transform hover:scale-110 transition-all duration-300 animate-bounce-in"
            >
              <Download size={20} className="group-hover:animate-bounce-gentle transition-transform duration-300" />
              Download CV
            </button>
            
            <button 
              onClick={() => smoothScrollToSection('contact')}
              className="btn-outline flex items-center gap-2 group transform hover:scale-110 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: '200ms' }}
            >
              <MessageCircle size={20} className="group-hover:animate-bounce-gentle transition-transform duration-300" />
              Hire Me
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1200 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button 
              onClick={() => smoothScrollToSection('about')}
              className="text-coral hover:text-coral-light transition-all duration-300 hover:scale-125 animate-float-gentle"
            >
              <ChevronDown size={32} className="animate-bounce-slow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
