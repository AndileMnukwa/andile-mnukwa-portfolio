
import { useState, useEffect, useRef } from 'react';
import { Users, FolderOpen, Clock, Award } from 'lucide-react';

const Facts = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const facts = [
    {
      icon: Users,
      number: 15,
      suffix: '+',
      label: 'Satisfied Clients',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FolderOpen,
      number: 20,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      color: 'from-coral to-coral-light'
    },
    {
      icon: Award,
      number: 10,
      suffix: '+',
      label: 'Professional Certifications',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          facts.forEach((fact, index) => {
            let current = 0;
            const increment = fact.number / 60; // Animate over ~1 second (60 frames)
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= fact.number) {
                current = fact.number;
                clearInterval(timer);
              }
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 16); // ~60fps
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, facts]);

  return (
    <section ref={sectionRef} id="facts" className="section-padding section-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Facts & <span className="text-coral">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Numbers that reflect my commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-6 bg-gradient-to-br ${fact.color} rounded-full mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <fact.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} rounded-full animate-ping opacity-20`}></div>
              </div>

              {/* Counter */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold font-poppins text-white">
                  {hasAnimated ? counters[index] : 0}
                  <span className="text-coral">{fact.suffix}</span>
                </span>
              </div>

              {/* Label */}
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h4>
            <p className="text-gray-300">98% client satisfaction rate with ongoing relationships</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Project Success</h4>
            <p className="text-gray-300">100% project completion rate on time and within budget</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Technology Expertise</h4>
            <p className="text-gray-300">Proficient in 15+ programming languages and frameworks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
