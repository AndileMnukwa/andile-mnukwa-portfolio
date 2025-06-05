
import { Code, Database, Brain, Shield, BookOpen, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'HTML5, CSS3, JavaScript, TypeScript, Python, SQL',
      color: 'from-coral to-coral-light'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React.js, TailwindCSS, ShadCN, Bootstrap, Radix UI, React Query',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express.js, Django, RESTful APIs, Supabase, React Hook Form, Zod',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase integration',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'AI tools integration, workflow automation, dynamic content generation',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Development Methodologies',
      description: 'Agile/Scrum, TDD, Git version control, CI/CD pipelines',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      description: 'GitHub, VS Code, Postman, Docker basics, DevOps workflows',
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: Code,
      title: 'WordPress Development',
      description: 'Custom themes, plugins, content management solutions',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security principles, safe coding practices, penetration testing',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-dark mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-blue max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-poppins text-navy-dark mb-3 group-hover:text-coral transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-gray-blue leading-relaxed">
                {skill.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral to-coral-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {[
              'React.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
              'TailwindCSS', 'Express.js', 'MongoDB', 'Git', 'Docker'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium hover:bg-coral hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
