
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
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-32 w-64 h-64 bg-coral rounded-full animate-float-slow blur-2xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-navy-light rounded-full animate-float-medium blur-xl opacity-60" style={{ animationDelay: '2s' }}></div>
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
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-navy-dark">
              I'm a{' '}
              <span className="text-coral font-semibold relative">
                {typingText}
                <span className="animate-pulse-cursor text-coral">|</span>
              </span>
            </p>
          </div>

          {/* Enhanced Description with better readability */}
          <div className={`transform transition-all duration-1500 delay-600 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-lg">
              <p className="text-lg md:text-xl text-navy-dark font-medium leading-relaxed">
                Passionate about creating visually appealing and user-friendly digital experiences. 
                I craft clean, efficient code and design intuitive interfaces that deliver exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons with better visibility */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1500 delay-900 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button 
              onClick={handleDownloadCV}
              className="btn-primary flex items-center gap-2 group transform hover:scale-110 transition-all duration-300 animate-bounce-in shadow-lg"
            >
              <Download size={20} className="group-hover:animate-bounce-gentle transition-transform duration-300" />
              Download CV
            </button>
            
            <button 
              onClick={() => smoothScrollToSection('contact')}
              className="bg-coral hover:bg-coral-light text-white font-medium px-8 py-4 rounded-lg flex items-center gap-2 group transform hover:scale-110 transition-all duration-300 animate-bounce-in shadow-lg"
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
