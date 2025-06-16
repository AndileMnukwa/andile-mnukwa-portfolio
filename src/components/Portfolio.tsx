
import { ExternalLink, Github } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const projects = [
    {
      title: 'MaestroLearn',
      description: 'AI-powered personalized learning platform that generates structured courses based on individual user needs and learning preferences, built with React and Supabase database for real-time data management.',
      image: '/image/Maestro.png',
      tags: ['React', 'AI Integration', 'TypeScript', 'Supabase'],
      liveUrl: 'https://pathwise-ai-accelerator.lovable.app/',
      githubUrl: 'https://github.com/AndileMnukwa/maestro-learn',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'VibeCatcher',
      description: 'Event discovery and management platform built with React & Node.js, featuring MySQL database for data management and AI-powered sentiment analysis for enhanced user experience and event recommendations.',
      image: '/image/Vibes.png',
      tags: ['React', 'Node.js', 'MySQL', 'AI Sentiment Analysis'],
      liveUrl: 'https://vibe-catcher-reeman.lovable.app/',
      githubUrl: 'https://github.com/AndileMnukwa/vibe-catcher',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'WeChat',
      description: 'Real-time chat application with modern web technologies, featuring instant messaging, file sharing, and user presence.',
      image: '/image/Chat.png',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB', 'Real-time'],
      liveUrl: 'https://chat-app-chi-livid.vercel.app/',
      githubUrl: 'https://github.com/AndileMnukwa/chat-app',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'IT Consulting Website',
      description: 'A comprehensive platform for IT consulting services built with HTML, CSS, and Bootstrap (not React). Features responsive design and professional service showcases for data analysis and consulting solutions.',
      image: '/image/binary.png',
      tags: ['HTML', 'CSS', 'Bootstrap', 'Responsive Design'],
      liveUrl: 'https://binarybrainsconsulting.netlify.app/',
      githubUrl: 'https://github.com/AndileMnukwa/it-consulting',
      color: 'from-coral to-coral-light'
    }
  ];

  const [containerRef, visibleItems] = useStaggeredAnimation(projects.length, 200);

  return (
    <section id="portfolio" className="section-padding section-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="text-coral">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development, AI integration, and user-centric design
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-700 ease-out transform ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              } hover:bg-white/20 hover:scale-105 hover:shadow-2xl`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Enhanced Overlay Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-coral rounded-lg hover:bg-coral-light transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold font-poppins text-white mb-1 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-300 leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-coral/20 text-coral text-sm rounded-full border border-coral/30 hover:bg-coral/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Action Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-all duration-300 font-medium group/link"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Enhanced Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <button className="btn-primary transform hover:scale-110 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
