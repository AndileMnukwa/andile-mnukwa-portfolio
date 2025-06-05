
import { Code, Palette, Smartphone, Database, Shield, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, modern websites and web applications built with the latest technologies and best practices.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatible']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Code,
      title: 'React Development',
      description: 'Dynamic, interactive web applications using React.js with modern state management and component architecture.',
      features: ['Component Architecture', 'State Management', 'Performance', 'Testing']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver native-like performance and user experience.',
      features: ['React Native', 'Cross-platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient, scalable database solutions with proper normalization, indexing, and optimization.',
      features: ['Database Modeling', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security best practices and threat protection to keep your applications and data safe.',
      features: ['Security Audits', 'Penetration Testing', 'Secure Coding', 'Compliance']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-dark mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-blue max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-coral-light/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-coral to-coral-light rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold font-poppins text-navy-dark mb-4 group-hover:text-coral transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-blue leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-blue"
                    >
                      <div className="w-1.5 h-1.5 bg-coral rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-coral rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral to-coral-light p-8 rounded-xl text-white">
            <h3 className="text-2xl font-semibold font-poppins mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button className="bg-white text-coral hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
