import { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Software Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a blob URL for the file path
    fetch('/Andile_Mnukwa_CV.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create an anchor element and set its properties
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Andile_Mnukwa_CV.pdf';
        
        // Append the anchor to the document, click it, and remove it
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error downloading CV:', error);
      });
  };
  
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy border-4 border-navy-light rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-coral-light rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-navy-dark mb-6">
            Hello, I'm{' '}
            <span className="text-gradient">Andile Mnukwa</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-blue">
              I'm a{' '}
              <span className="text-coral font-semibold">
                {typingText}
                <span className="animate-ping">|</span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-blue max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating visually appealing and user-friendly digital experiences. 
            I craft clean, efficient code and design intuitive interfaces that deliver exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={handleDownloadCV}
              className="btn-primary flex items-center gap-2 group"
            >
              <Download size={20} className="group-hover:animate-bounce-gentle" />
              Download CV
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline flex items-center gap-2 group"
            >
              <MessageCircle size={20} className="group-hover:animate-bounce-gentle" />
              Hire Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-coral hover:text-coral-light transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
