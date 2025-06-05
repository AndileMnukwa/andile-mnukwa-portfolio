
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Education = () => {
  const timelineItems = [
    {
      type: 'experience',
      title: 'Full-Stack Developer (Intern)',
      company: 'CAPACITI, UVU Africa',
      period: '2024 - 2025',
      location: 'Cape Town, South Africa',
      description: 'Built applications using React, Java, Python, and HTML while implementing modern web technologies. Actively participated in Scrum methodologies, developed strong presentation and communication skills, and collaborated effectively with cross-functional team members in an agile environment.',
      icon: Briefcase,
      color: 'bg-coral'
    },
    {
      type: 'experience',
      title: 'Software Developer',
      company: 'PAICTA',
      period: '2023 - 2024',
      location: 'Cape Town, South Africa',
      description: 'Developed and maintained web applications while collaborating with cross-functional teams and optimizing system performance. Worked in partnership with CSIR (Council for Scientific and Industrial Research) on cybersecurity initiatives. Gained hands-on experience in CSIR laboratories learning various aspects of cyber attacks, online safety protocols, penetration testing, web hacking techniques, and conducted research on system vulnerabilities.',
      icon: Briefcase,
      color: 'bg-navy'
    },
    {
      type: 'education',
      title: 'Diploma in Information Technology',
      company: 'Walter Sisulu University',
      period: '2019 - 2022',
      location: 'Eastern Cape, South Africa',
      description: 'Specialized in Software Development, algorithms, and database management. Graduated with distinction.',
      icon: Award,
      color: 'bg-coral'
    }
  ];

  return (
    <section id="education" className="section-padding section-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Education & <span className="text-coral">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My academic background and professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gray-600"></div>

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${item.color} bg-opacity-20`}>
                        <item.icon className="w-5 h-5 text-coral" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold font-poppins text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-coral font-medium mb-2">
                      {item.company}
                    </h4>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Details Box */}
        <div className="max-w-md mx-auto mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold font-poppins text-white mb-4 text-center">
            Personal Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Email:</span>
              <span className="text-white">andile.reeman@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Phone:</span>
              <span className="text-white">+27 65 607 1416</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Location:</span>
              <span className="text-white">Cape Town, WC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Status:</span>
              <span className="text-coral">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
