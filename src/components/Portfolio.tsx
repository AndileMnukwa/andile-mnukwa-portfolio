
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'MaestroLearn',
      description: 'AI-powered learning platform with personalized courses and intelligent content generation for enhanced educational experiences.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['React', 'AI Integration', 'TypeScript', 'TailwindCSS'],
      liveUrl: 'https://pathwise-ai-accelerator.lovable.app/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'VibeCatcher',
      description: 'Event discovery and management platform built with React and Node.js, featuring real-time updates and social integration.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Real-time'],
      liveUrl: 'https://ai-powered-event.vercel.app/',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'WeChat',
      description: 'Real-time chat application with modern web technologies, featuring instant messaging, file sharing, and user presence.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'Real-time'],
      liveUrl: 'https://chat-app-chi-livid.vercel.app/',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'IT Consulting Website',
      description: 'Comprehensive platform for IT consulting services with modern design, service showcases, and client management features.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      tags: ['React', 'TailwindCSS', 'Responsive', 'Business'],
      liveUrl: 'https://binarybrainsconsulting.netlify.app/',
      color: 'from-coral to-coral-light'
    }
  ];

  return (
    <section id="portfolio" className="section-padding section-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="text-coral">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development, AI integration, and user-centric design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 card-hover"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-coral rounded-lg hover:bg-coral-light transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins text-white mb-3 group-hover:text-coral transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-coral/20 text-coral text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors duration-300 font-medium"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
