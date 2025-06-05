
import { MapPin, Phone, Mail, GraduationCap, Globe, Award } from 'lucide-react';

const About = () => {
  const details = [
    { icon: Globe, label: 'Website', value: '@ndilemnukwa.com' },
    { icon: Phone, label: 'Phone', value: '+27 65 607 1416' },
    { icon: Mail, label: 'Email', value: 'andile.reeman@gmail.com' },
    { icon: GraduationCap, label: 'Degree', value: 'Diploma in Information Technology' },
    { icon: MapPin, label: 'Location', value: 'Cape Town, Western Cape' },
    { icon: Award, label: 'Certifications', value: 'IBM & Coursera' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-dark mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-blue max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Photo */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-coral to-coral-light rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-4 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Andile Mnukwa - Professional Photo"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold font-poppins text-navy-dark mb-4">
                Full-Stack Developer & UI/UX Designer
              </h3>
              <p className="text-gray-blue leading-relaxed mb-6">
                I am a passionate Full-Stack Developer with expertise in creating visually appealing 
                and user-friendly digital experiences. My focus is on crafting clean, efficient code 
                and designing intuitive interfaces that deliver exceptional user experiences.
              </p>
              <p className="text-gray-blue leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I bring ideas to 
                life through innovative solutions and cutting-edge development practices.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                    <detail.icon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-blue">{detail.label}</p>
                    <p className="text-navy-dark font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="btn-primary">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
